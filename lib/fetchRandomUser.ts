import { string } from "yup";

export interface ApiResponse {
  results: User[];
}

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

export interface DataUser {
  firstName: string;
  lastName: string;
  pict: string;
}

export const fetchRandomUser = async (): Promise<DataUser[]> => {
  const response = await fetch("https://randomuser.me/api/?results=100");
  const data: ApiResponse = await response.json();

  const randomUser: DataUser[] = data.results.map((item: any) => ({
    firstName: item.name.first,
    lastName: item.name.last,
    pict: item.picture.medium,
  }));

  sessionStorage.setItem("randomUser", JSON.stringify(randomUser));

  return randomUser;
};

export const getStoredUsers = (): DataUser[] => {
  const storedUsers = sessionStorage.getItem("randomUser");
  return storedUsers ? JSON.parse(storedUsers) : [];
};
