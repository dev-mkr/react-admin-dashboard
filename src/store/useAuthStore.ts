import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AxiosError } from "axios";
import { axiosPrivate } from "@/api/axios";

type AuthDataType = {
  access_token: string;
  user: { id: string; email: string; first_name: string; last_name: string };
};

type AuthState = {
  auth: AuthDataType | null;
  actions: {
    setAuth: (payload: AuthDataType) => void;
    logOut: () => void;
    refreshTheToken: () => void;
  };
};

const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    auth: null,
    actions: {
      setAuth: (payload) => set(() => ({ auth: payload })),

      logOut: async () => {
        await axiosPrivate.post("/auth/logout");
        set(() => ({ auth: null }));
      },

      refreshTheToken: async () => {
        try {
          const response = await axiosPrivate.get("/auth/refresh", {
            withCredentials: true,
          });

          set((state) => ({ auth: { ...state.auth, ...response.data } }));
          return response.data.access_token;
        } catch (error) {
          const errorResponse = error as AxiosError;
          if (errorResponse?.response?.status === 401) {
            set(() => ({ auth: null }));
          }
        }
      },
    },
  }))
);

export default useAuthStore;
