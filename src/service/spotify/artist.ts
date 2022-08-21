import { spotifyApi } from './client';


export const getTopArtistCurrentUser = (params: Object): Promise<Object> => {
  return spotifyApi.getMyTopArtists(params)
} 