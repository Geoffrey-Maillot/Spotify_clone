import { spotifyApi } from './client';

export const getCategories = (params?: Object) => {
  return spotifyApi.getCategories(params && params);
};

export const getCategory = (categoryId: string, params?: Object) => {
  return spotifyApi.getCategory(categoryId, params && params);
};

export const getCategoryPlaylists = (categoryId: string, params?: Object) => {
  return spotifyApi.getCategoryPlaylists(categoryId, params && params);
};
