import { useQuery } from "react-query"
import api from "../api/api"


export const useFetchMyShortUrls = (token, onError) => {
    return useQuery("my-shortenurls",
         async () => {
            return await api.get(
                "/api/urls/myUrls",
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
    },
          {
            select: (data) => {
                const sortedData = data.data.sort(
                    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
                );
                return sortedData;
            },
            onError,
            staleTime: 5000
          }
        );
};

export const useFetchTotalClicks = (token, startDate, endDate, onError) => {
    return useQuery(["url-totalclick", startDate, endDate], 
        async () => {
            return await api.get(
                "/api/urls/totalClicks", 
                {
                    params: { startDate, endDate }, // ✅ Dynamically adding query params
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );
        },
        {
            select: (data) => {
                const convertToArray = Object.keys(data.data).map((key) => ({
                    clickDate: key,
                    count: data.data[key],
                }));
                return convertToArray;
            },
            onError,
            staleTime: 5000,
        }
    );
};

export const useFetchClicksByDateTime = (token, startDateTime, endDateTime, onError) => {
  return useQuery(["url-clicks-by-datetime", startDateTime, endDateTime], 
    async () => {
      return await api.get(
        "/api/urls/totalclicksByDateTime",
        {
          params: { startDateTime, endDateTime }, // ✅ Dynamically adding query params
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    },
    {
      select: (data) => {
        return Object.keys(data.data).map((key) => ({
          clickDateTime: key,
          count: data.data[key],
        }));
      },
      onError,
      staleTime: 5000,
    }
  );
};