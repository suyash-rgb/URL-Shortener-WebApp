import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import api from '../../api/api'; 
import { useStoreContext } from "../../contextApi/ContextApi";


const CustomizePopUp = ({ open, setOpen, shortUrl, refetch }) => {
  const [customUrl, setCustomUrl] = useState('');
  const { token } = useStoreContext();

  const handleClose = () => {
    setCustomUrl('');
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (!customUrl || customUrl.length > 15) {
      toast.error('Custom URL must be 15 characters or fewer');
      return;
    }

    try {
      const encodedUrl = encodeURIComponent(shortUrl);
      await api.put(
        `/api/urls/customize-shortUrl/${encodedUrl}`,
        { newShortUrl: customUrl },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );

      toast.success('Short URL updated successfully!');
      refetch();
      handleClose();
    } catch (error) {
      const status = error?.response?.status;
      const message = error?.response?.data?.error || 'Something went wrong';
      if (status === 413) {
        toast.error('URL is too long!');
      } else if (status === 400 || status === 409) {
        toast.error(message);
      } else {
        toast.error('Failed to customize short URL');
      }
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Customize Short URL</h2>
        <TextField
          fullWidth
          label="Custom URL"
          variant="outlined"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        />
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomizePopUp;