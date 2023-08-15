import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useSWR from "swr";

type GetPrivateDataReturnType<T> =
  | React.ReactNode
  | {
      data: T | undefined;
      error: React.ReactNode;
      isLoading: boolean;
      fullResponse: unknown;
    };

type DataResponse<T> = {
  data: T;
};

const useGetPrivateData = <T extends DataResponse<unknown>>(
  url: string,
  loadingFallback: React.ReactNode,
  errorFallback?: React.ReactNode
): GetPrivateDataReturnType<T["data"]> => {
  const axiosPrivate = useAxiosPrivate();
  const { data, error, isLoading } = useSWR<T>(url, axiosPrivate);
  console.log(data);
  if (error) return errorFallback;
  if (isLoading) return loadingFallback;
  return { data: data?.data, error, isLoading, fullResponse: data };
};

export default useGetPrivateData;
