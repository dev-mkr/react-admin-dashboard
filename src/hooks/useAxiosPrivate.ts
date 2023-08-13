import useAuthStore from "@/store/useAuthStore";
import axios from "axios";
import { useLayoutEffect } from "react";

const useAxiosPrivate = () => {
  const auth = useAuthStore((state) => state.auth);
  const refreshTheToken = useAuthStore(
    (state) => state.actions.refreshTheToken
  );
  const axiosPrivate = axios;

  useLayoutEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth?.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (
          error?.response?.status === 403 ||
          (error?.response?.status === 401 && !prevRequest?.sent)
        ) {
          prevRequest.sent = true;
          const newAccessToken = await refreshTheToken();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, axiosPrivate, refreshTheToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
