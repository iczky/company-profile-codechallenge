"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  firstName: string;
  lastName: string;
  pict: string;
}

interface UserContextType {
  users: User[];
  getRandomUser: () => User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const getStoredUsers = (): User[] => {
  const storedUsers = sessionStorage.getItem("randomUsers");
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const data = await response.json();
    const formattedData = data.results.map((item: any) => ({
      firstName: item.name.first,
      lastName: item.name.last,
      pict: item.picture.medium,
    }));
    sessionStorage.setItem("randomUsers", JSON.stringify(formattedData));
    return formattedData;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>(getStoredUsers());

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers().then((data) => setUsers(data));
    }
  }, [users]);

  const getRandomUser = (): User | null => {
    if (users.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  return (
    <UserContext.Provider value={{ users, getRandomUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
