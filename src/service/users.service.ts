import axios from 'axios';

interface Image {
  source: string;
  url: string;
}

export interface User {
  firstName: string;
  lastName: string;
  photos: Image[];
  signal: number;
  status: string;
}

export const getUsersList = async (): Promise<User[] | null> => {
  try {
    const response = await axios.get<User[]>(
      'https://gist.githubusercontent.com/RaiSaugat/00ef0e4d9a7ba65c9012a0f12b58207a/raw/ff6a7b1ab4967595ba38b4f16f88e6cd6175f6e9/users.json'
    );
    return response?.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
