import { spotifyApi } from './client';
import { useQuery } from '@tanstack/react-query';
/**
 * ALBUM CURRENT USER
 */

export const useGetMySavedAlbums = (params?: Object, options?: Object) => {
  return useQuery<SpotifyApi.UsersSavedAlbumsResponse, any>(
    ['savedAlbums'],
    () => spotifyApi.getMySavedAlbums(params),
    options
  );
};

export const addToMySavedAlbums = (
  albumIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.addToMySavedAlbums(albumIds, params);
};

export const removeFromMySavedAlbums = (
  albumIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.removeFromMySavedAlbums(albumIds, params && params);
};

export const useCheckAlbumsAreAlreadySaved = (
  albumsIds: Array<string>,
  params?: Object,
  options?: Object
) => {
  return useQuery(
    ['checkAlbumsAreAlreadySaved'],
    () => spotifyApi.containsMySavedAlbums(albumsIds, params),
    options
  );
};

/**
 * ALBUM
 */

export const useGetAlbum = (
  albumId: string,
  params?: Object,
  options?: Object
) => {
  return useQuery<SpotifyApi.SingleAlbumResponse, any>(
    ['album'],
    () => spotifyApi.getAlbum(albumId, params),
    options
  );
};

export const useGetAlbumTracks = (
  albumId: string,
  params?: Object,
  options?: Object
) => {
  return useQuery<SpotifyApi.AlbumTracksResponse, any>(
    ['albumTracks'],
    () => spotifyApi.getAlbumTracks(albumId, params),
    options
  );
};

export const useGetAlbums = (
  albumIds: Array<string>,
  params?: Object,
  options?: Object
) => {
  return useQuery<SpotifyApi.MultipleAlbumsResponse, any>(
    ['Albums'],
    () => spotifyApi.getAlbums(albumIds, params),
    options
  );
};
