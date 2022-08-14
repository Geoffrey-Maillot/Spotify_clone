export enum PageType {
  ARTIST = 'artist',
  SHOW = 'show',
  PLAYLIST = 'playlist',
  EPISODE = 'episode',
  USER = 'user'
}

export interface Album {
  img: string;
  title: string;
  content: string;
  type?: PageType
}

export interface Track {
  track: number;
  img: string;
  title: string;
  artist?: string;
  album?: string;
  duration: string;
  liked: boolean;
  like?: number;
}
