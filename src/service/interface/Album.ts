export interface Album {
  img: string;
  title: string;
  content: string;
  type?: 'artist' | 'show' | 'playlist' | 'episode' | 'user';
}
