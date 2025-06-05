import React, { useState } from 'react';
import Graph from './Graph';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery';
import ShortenPopUp from './ShortenPopUp';
import { FaLink } from 'react-icons/fa';
import ShortenUrlList from './ShortenUrlList';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const { isLoading, data: myShortenUrls, refetch: refetchShortUrls } = useFetchMyShortUrls(token, onError);
  const { isLoading: loader, data: totalClicks =[], refetch: refetchTotalClicks } = useFetchTotalClicks(token, startDate.toISOString().split("T")[0], endDate.toISOString().split("T")[0], onError);

  function onError() {
    navigate("/error");
  }

  const handleDateChange = () => {
    refetchTotalClicks();
  };

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">

            {/* 🔹 Start Date Label & Picker */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                className="border px-2 py-1 rounded-md"
              />
            </div>

           {/* 🔹 End Date Label & Picker */}
           <div className="flex flex-col">
             <label className="text-sm font-semibold text-gray-700">End Date</label>
             <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="yyyy-MM-dd"
                className="border px-2 py-1 rounded-md"
              />
            </div>

           <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md self-end"
              onClick={handleDateChange}
            >
             Filter Analytics
            </button>
         </div>

          {/* 🔹 Analytics Graph */}
          <div className="relative min-h-[300px] flex flex-col items-center justify-between">
          {totalClicks && totalClicks.length === 0 ? (
            <div className="text-center">
              <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-2">
                No Data For This Time Period
              </h1>
              <h3 className="sm:w-96 w-[90%] text-center sm:text-lg text-sm text-slate-600">
                Share your short link to view where your engagements are coming from.
              </h3>
            </div>
          ) : (
            <div className="h-[350px] w-full overflow-hidden">
              <Graph graphData={totalClicks} />
            </div>
          )}
          </div>

          {/* 🔹 Shorten URL Button */}
          <div className='py-5 sm:text-end text-center'>
            <button
              className='bg-custom-gradient px-4 py-2 rounded-md text-white'
              onClick={() => setShortenPopUp(true)}
            >
              Create a New Short URL
            </button>
          </div>

          {/* 🔹 Short URL List */}
          <div>
            {!isLoading && myShortenUrls.length === 0 ? (
              <div className="flex justify-center pt-16">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                  <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                    You havent created any short link yet
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm" />
                </div>
              </div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      {/* 🔹 Shorten Pop-Up Component */}
      <ShortenPopUp refetch={refetchShortUrls} open={shortenPopUp} setOpen={setShortenPopUp} />
    </div>
  );
};

export default DashboardLayout;