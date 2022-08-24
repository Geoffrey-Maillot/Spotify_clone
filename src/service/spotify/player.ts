import { spotifyApi } from './client';

export const getMyCurrentPlaybackState = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyCurrentPlaybackState(params && params);
};

export const getMyCurrentPlayingTrack = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyCurrentPlayingTrack(params && params);
};

/**
 * @param deviceIds
 * @param params - {play: boolean}
 * @returns Promise<void>
 */
export const transferMyPlayback = (
  deviceIds: Array<string>,
  params?: Object
): Promise<void> => {
  return spotifyApi.transferMyPlayback(deviceIds, params && params);
};

export const play = (params?: Object): Promise<void> => {
  return spotifyApi.play(params && params);
};

export const queue = (uri: string, params?: Object): Promise<void> => {
  return spotifyApi.queue(uri, params && params);
};

export const pause = (params?: Object): Promise<void> => {
  return spotifyApi.pause(params && params);
};

export const next = (params?: Object): Promise<void> => {
  return spotifyApi.skipToNext(params && params);
};

export const previous = (params?: Object): Promise<void> => {
  return spotifyApi.skipToPrevious(params && params);
};

export const seek = (position_ms: number, params?: Object): Promise<void> => {
  return spotifyApi.seek(position_ms, params && params);
};

export enum RepeatState {
  TRACK = 'track',
  CONTEXT = 'context',
  OFF = 'off',
}
export const setRepeat = (
  state: RepeatState,
  params?: Object
): Promise<void> => {
  return spotifyApi.setRepeat(state, params && params);
};
/**
 *
 * @param volume_percent - number min 0 / max 100
 * @param params - options
 * @returns  Promise<void>
 */
export const setVolume = (
  volume_percent: number,
  params?: Object
): Promise<void> => {
  return spotifyApi.setVolume(volume_percent, params && params);
};

export const setShuffle = (state: boolean, params?: Object): Promise<void> => {
  return spotifyApi.setShuffle(state, params && params);
};
