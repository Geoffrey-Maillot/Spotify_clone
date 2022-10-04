import { spotifyApi } from './client';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentUser = () => {
  return useQuery<SpotifyApi.CurrentUsersProfileResponse, any>(
    ['currentUser'],
    spotifyApi.getMe
  );
};

export const getUser = (userId: string, params?: Object): Promise<Object> => {
  return spotifyApi.getUser(userId, params && params);
};

export const getDevices = (): Promise<Object> => {
  return spotifyApi.getMyDevices();
};