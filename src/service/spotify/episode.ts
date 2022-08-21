import { spotifyApi } from './client';
import { episode } from '../../component/HeaderBandPlay/HeaderBandPlay.stories';

export const getShowEpisodes = (
  showId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getShowEpisodes(showId, params && params);
};

export const getEpisode = (
  episodeId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getEpisode(episodeId, params && params);
};

export const getEpisodes = (
  episodeIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getEpisodes(episodeIds, params && params);
};
