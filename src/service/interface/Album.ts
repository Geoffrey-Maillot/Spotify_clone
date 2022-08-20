import Artists from '../../pages/Collection/Artists';
import { spotifyApi } from '../spotify/Client';
export enum PageType {
  ARTIST = 'artist',
  SHOW = 'show',
  PLAYLIST = 'playlist',
  EPISODE = 'episode',
  USER = 'user',
}

export interface Album {
  img: string;
  title: string;
  content: string;
  type?: PageType;
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

// Spotify

type Image = {
  height: number;
  url: string;
  width: number;
};

type ExternalUrl = {
  spotify: string;
};

type Restriction = {
  reason: string;
};

type Followers = {
  href: string;
  total: number;
};

type Album_type = 'album' | 'single' | 'compilation';

type TypePage = 'show' | 'user' | 'playlist' | 'episode' | 'artist';

export interface User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: ExternalUrl;
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Array<Image>;
  primary_color: string;
  product: string;
  type: TypePage;
  uri: string;
}

export interface AlbumSpotify {
  album_type: Album_type;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restriction;
  type: TypePage;
  uri: string;
  artists: Array<Artist>;
  tracks: Tracks;
}

export interface Artist {
  external_urls: ExternalUrl;
  followers: Followers;
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  popularity: number;
  type: TypePage;
  uri: string;
  primary_color: string;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  type: TypePage;
  uri: string;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
}

export interface Tracks {
  href: string;
  items: Array<TrackSpotify>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface TrackSpotify {
  album: AlbumSpotify;
  Artists: Array<Artist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  restrictions: Restriction;
  type: TypePage;
  uri: string;
  album_group: string;
  primary_color: string;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrl;
  followers: Followers;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
    type: TypePage;
    uri: string;
  };
  type: TypePage;
  uri: string;
}
