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
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("23:59:59");
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

            {/* 🔹 Dynamically Show Time Pickers If Same Day */}
            {startDate.toISOString().split("T")[0] === endDate.toISOString().split("T")[0] && (
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* 🔹 Start Time Dropdown */}
                 <div className="flex flex-col">
                   <label className="text-sm font-semibold text-gray-700">Start Time</label>
                   <input
                     type="time"
                     className="border px-2 py-1 rounded-md"
                     value={startTime}
                     onChange={(e) => setStartTime(e.target.value)}
                   />
                 </div>

                {/* 🔹 End Time Dropdown */}
                 <div className="flex flex-col">
                   <label className="text-sm font-semibold text-gray-700">End Time</label>
                   <input
                     type="time"
                     className="border px-2 py-1 rounded-md"
                     value={endTime}
                     onChange={(e) => setEndTime(e.target.value)}
                   />
                 </div>
              </div>
           )}

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

          {/* 🔹 Manage Links Section */}
          <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
           <h2 className="text-4xl font-semibold text-gray-800">Manage Links</h2>

           {/* 🔹 Shorten URL Button */}
           <div className="py-5 sm:text-end text-center">
             <button
               className="bg-blue-500 px-4 py-2 rounded-md text-white"
               onClick={() => setShortenPopUp(true)}
              >
               Create a New Short URL
             </button>
           </div>

           {/* 🔹 Shortened URL List */}
           <div className="mt-4">
             {!isLoading && myShortenUrls.length === 0 ? (
               <div className="flex justify-center pt-8">
                <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-white">
                  <h1 className="text-gray-800 font-montserrat sm:text-lg text-md font-semibold">
                    You haven’t created any short links yet.
                  </h1>
                  <FaLink className="text-blue-500 sm:text-xl text-sm" />
                </div>
               </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} />
          )}
        </div>
       </div>
       

       {/* 🔹 Shorten Pop-Up Component */}
       <ShortenPopUp refetch={refetchShortUrls} open={shortenPopUp} setOpen={setShortenPopUp} />
      </div>
     )}
    </div>
  );
};

export default DashboardLayout;