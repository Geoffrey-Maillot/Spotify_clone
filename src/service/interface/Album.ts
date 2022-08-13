export interface Album {
  img: string;
  title: string;
  content: string;
  type?: 'artist' | 'show' | 'playlist' | 'episode' | 'user';
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
