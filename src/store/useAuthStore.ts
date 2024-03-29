import { create } from "zustand";
import axios, { AxiosError } from "axios";
import { persist } from "zustand/middleware";

type AuthDataType = {
  access_token: string;
  user: { id: string; email: string; first_name: string; last_name: string };
};

type AuthState = {
  auth: AuthDataType | null;
  rememberMe: boolean;
  actions: {
    setAuth: (payload: AuthDataType) => void;
    logOut: () => void;
    refreshTheToken: () => Promise<string>;
    setRememberMe: (value: boolean) => void;
  };
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      auth: null,
      rememberMe: false,
      actions: {
        setAuth: (payload) => set(() => ({ auth: payload })),
        logOut: async () => {
          await axios.post("/auth/logout", null, { withCredentials: true });
          set(() => ({ auth: null }));
        },
        refreshTheToken: async () => {
          try {
            const response = await axios.get("/auth/refresh", {
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
        setRememberMe: (value) => set(() => ({ rememberMe: value })),
      },
    }),
    {
      name: "rememberMe",
      partialize: (state) => ({ rememberMe: state.rememberMe }),
    }
  )
);

export default useAuthStore;
