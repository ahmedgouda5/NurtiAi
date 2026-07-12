import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  weight: number;
  height: number;
  birthDate: string;
  gender: "male" | "female";
  goals: string;
  maritalStatus: string;
  financialStatus: string;
  healthConditions: string[];
}

interface UserState {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
}

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? window.sessionStorage : noopStorage,
      ),
    },
  ),
);

export default useUserStore;
