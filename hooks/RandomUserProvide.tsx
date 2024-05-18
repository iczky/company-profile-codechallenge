"use client";

import {
  DataUser,
  fetchRandomUser,
  getStoredUsers,
} from "@/lib/fetchRandomUser";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface RandomUserContextType {
  users: DataUser[];
  getRandomUser: () => DataUser | null;
}

const RandomUserContext = createContext<RandomUserContextType | undefined>(
  undefined
);

export const RandomUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<DataUser[]>(getStoredUsers());

  useEffect(() => {
    fetchRandomUser().then((data) => setUsers(data));
  }, []);

  const getRandomUser = (): DataUser | null => {
    if (users.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  return (
    <RandomUserContext.Provider value={{ users, getRandomUser }}>
      {children}
    </RandomUserContext.Provider>
  );
};

export const useRandomUserContext = (): RandomUserContextType => {
  const context = useContext(RandomUserContext);
  if (context === undefined) {
    throw new Error("Error");
  }
  return context;
};

export default RandomUserProvider;
