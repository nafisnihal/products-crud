import { QueryClient } from "@tanstack/react-query";
import globalAxiosInstance from "./axiosInterceptor";

// this is default query function that will receive the query key
const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await globalAxiosInstance(`${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default queryClient;
