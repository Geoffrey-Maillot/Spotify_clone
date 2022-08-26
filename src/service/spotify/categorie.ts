import { spotifyApi } from './client';
import {useQuery } from '@tanstack/react-query';

export const getCategories = (params?: Object) => {
  return spotifyApi.getCategories(params && params);
};

export const getCategory = (categoryId: string, params?: Object) => {
  return spotifyApi.getCategory(categoryId, params && params);
};

export const useGetCategoryPlaylists = (categoryId: string, params?: Object) => {
  return useQuery<SpotifyApi.CategoryPlaylistsResponse,any>(['categoryPlaylists'], () => spotifyApi.getCategoryPlaylists(categoryId, params)) 
};
