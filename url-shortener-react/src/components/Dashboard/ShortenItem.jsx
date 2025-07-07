import dayjs from "dayjs";
import React, { useEffect, useState, useCallback } from "react";
import toast from 'react-hot-toast';
import CopyToClipboard from "react-copy-to-clipboard";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import { MdDelete, MdEdit } from "react-icons/md";  
import api from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../contextApi/ContextApi";
import CustomizePopUp from './CustomizePopUp';
import { Hourglass } from "react-loader-spinner";
import Graph from "./Graph";

const ShortenItem = ({ originalUrl, shortUrl, clickCount, createdDate, refetch, startDate, endDate }) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [analyticsData, setAnalyticsData] = useState([]);
  const [customizePopUp, setCustomizePopUp] = useState(false);
  const [customizeTargetUrl, setCustomizeTargetUrl] = useState('');

  const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
    /^https?:\/\//,
    ""
  );

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = useCallback(async () => {
    if (!selectedUrl || !startDate || !endDate) {
      return;
    }
    
    setLoader(true);
    try {
      const formattedStartDate = startDate.toISOString().split("T")[0] + "T00:00:00";
      const formattedEndDate = endDate.toISOString().split("T")[0] + "T23:59:59";

      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setAnalyticsData(data);
      setSelectedUrl("");
      console.log(data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, [selectedUrl, startDate, endDate, token, navigate]); // memoize  function using dependencies

  const deleteHandler = async (shortUrl) => {
    try {
        await api.delete(`/api/urls/delete-url-mapping/${shortUrl}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        });

        toast.success("Short URL deleted successfully!");
        refetch(); // Refresh list instantly
    } catch (error) {
        console.log(error);
        toast.error("Failed to delete short URL.");
    }
};

 useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
 }, [selectedUrl, fetchMyShortUrl]);

 const handleCustomize = async (currentShortUrl) => {
  const customUrl = prompt("Enter you custome short URL: ");
  if(!customUrl || customUrl.length>15){
    toast.error("Custom URL must be 15 characters or fewer");
    return;
  }

  try {
    const encodedUrl = encodeURIComponent(currentShortUrl);
    await api.put(
      `/api/urls/customize-shortUrl/${encodedUrl}`,
      { newShortUrl: customUrl},
      {
        headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + token,
        },
      }
    );

    toast.success("Short Url updated successfully!");
    refetch();
  } catch(error){
    const status = error?.response?.status;
    const message = error?.response?.data.error || "Something went wrong";
    if(status === 413){
      toast.error(error?.response?.data.error || "URL is too long!");
    } else if(status === 400 || status === 409){
      toast.error(message);
    } else {
      toast.error("Failed to customize short URL");
    }
    console.error(error);
  }
 };

 

  return (
    <div
      className={`bg-slate-100 shadow-lg border border-dotted  border-slate-500 px-6 sm:py-1 py-3 rounded-md  transition-all duration-100 `}
    >
      <div
        className={`flex sm:flex-row flex-col  sm:justify-between w-full sm:gap-0 gap-5 py-5 `}
      >
        <div className="flex-1 sm:space-y-1 max-w-full overflow-x-auto overflow-y-hidden ">
          <div className="text-slate-900 pb-1 sm:pb-0   flex items-center gap-2 ">
            {/* <a href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
                target="_blank"
                className=" text-[17px]  font-montserrat font-[600] text-linkColor ">
                {subDomain + "/" + `${shortUrl}`}
            </a> */}

            <Link
              target="_"
              className="text-[17px]  font-montserrat font-[600] text-linkColor"
              to={
                import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`
              }
            >
              {subDomain + "/s/" + `${shortUrl}`}
            </Link>
            <FaExternalLinkAlt className="text-linkColor" />
          </div>

          <div className="flex items-center gap-1 ">
            <h3 className=" text-slate-700 font-[400] text-[17px] ">
              {originalUrl}
            </h3>
          </div>

          <div className="flex   items-center gap-8 pt-6 ">
            <div className="flex gap-1  items-center font-semibold  text-green-800">
              <span>
                <MdOutlineAdsClick className="text-[22px] me-1" />
              </span>
              <span className="text-[16px]">{clickCount}</span>
              <span className="text-[15px] ">
                {clickCount === 0 || clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-lg text-slate-800">
              <span>
                <FaRegCalendarAlt />
              </span>
              <span className="text-[17px]">
                {dayjs(createdDate).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex  flex-1  sm:justify-end items-center gap-4">
          
          {/* 🔹 Copy Button */}
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${
              import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`
            }`}
          >
            <div className="flex cursor-pointer gap-1 items-center bg-btnColor py-2  font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white ">
              <button className="">{isCopied ? "Copied" : "Copy"}</button>
              {isCopied ? (
                <LiaCheckSolid className="text-md" />
              ) : (
                <IoCopy className="text-md" />
              )}
            </div>
          </CopyToClipboard>


          {/* Customize Button */}
          <div
              onClick={() => {
                setCustomizeTargetUrl(shortUrl);
                setCustomizePopUp(true);
              }}
              className="flex cursor-pointer gap-1 items-center bg-yellow-500 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
          >
              <button>Customize</button>
              <MdEdit className="text-md" />
          </div>

          {/* 🔹 Analytics Button */}
          <div
            onClick={() => analyticsHandler(shortUrl)}
            className="flex cursor-pointer gap-1 items-center bg-green-600 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white "
          >
            <button>Analytics</button>
            <MdAnalytics className="text-md" />
          </div>

          {/* Third Button - Example: Delete */}
          <div
            onClick={() => deleteHandler(shortUrl)} // Define deleteHandler function below
            className="flex cursor-pointer gap-1 items-center bg-red-600 py-2 font-semibold shadow-md shadow-slate-500 px-6 rounded-md text-white"
          >
            <button>Delete</button>
            <MdDelete className="text-md" /> {/* Import MdDelete icon */}
          </div>
        </div>
      </div>
      <React.Fragment>
        <div
          className={`${
            analyticToggle ? "flex" : "hidden"
          }  max-h-96 sm:mt-0 mt-5 min-h-96 relative  border-t-2 w-[100%] overflow-hidden `}
        >
          {loader ? (
            <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
              <div className="flex flex-col items-center gap-1">
                <Hourglass
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#306cce", "#72a1ed"]}
                />
                <p className="text-slate-700">Please Wait...</p>
              </div>
            </div>
          ) : (
            <>
              {analyticsData.length === 0 && (
                <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                  <h1 className=" text-slate-800 font-serif sm:text-2xl text-[15px] font-bold mb-1">
                    No Data For This Time Period
                  </h1>
                  <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-[12px] text-slate-600 ">
                    Share your short link to view where your engagements are
                    coming from
                  </h3>
                </div>
              )}
              <Graph graphData={analyticsData} />
            </>
          )}
        </div>

        <CustomizePopUp
          open={customizePopUp}
          setOpen={setCustomizePopUp}
          shortUrl={customizeTargetUrl}
          refetch={refetch}
        />

      </React.Fragment>
    </div>
  );
};

export default ShortenItem;
