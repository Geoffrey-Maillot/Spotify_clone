// Import component
import AlbumList from '../AlbumList/AlbumList';

const albums = [
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/302x302',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
];

interface Props {
  artistId: string | undefined;
}

const Compiles = ({ artistId }: Props) => (
  <AlbumList
    albums={albums}
    link={`/artist/${artistId}/discography/compilation`}
  />
);

export default Compiles;
