// Import component 
import AlbumList from "../AlbumList/AlbumList";

const albums = [
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://source.unsplash.com/random/301x301',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
];

interface Props {
  artistId: string | undefined;
}

const Singles = ({artistId}: Props) => (
    <AlbumList
        albums={albums}
                link={`/artist/${artistId}/discography/singles`}

      />
);

export default Singles;
