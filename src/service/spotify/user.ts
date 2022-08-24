import { spotifyApi } from './client';

export const getCurrentUser = () => {
  return spotifyApi.getMe();
};

export const getUser = (userId: string, params?: Object): Promise<Object> => {
  return spotifyApi.getUser(userId, params && params);
};