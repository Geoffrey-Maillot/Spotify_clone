// Import component 
import AlbumList from "../AlbumList/AlbumList";

const albums = [
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
];

interface Props {
  artistId: string | undefined;
}

const Releases = ({artistId}: Props) => (
  <AlbumList
        albums={albums}
        link={`/artist/${artistId}/discography/all`}
      />
);

export default Releases;
