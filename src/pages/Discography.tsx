// Import Router
import { useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H2 from '../component/Typo/H2/H2';
import DiscographyAlbum from '../component/Discography/DiscographyAlbum';
import DiscographyHeader from '../component/Discography/DiscographyHeader';

interface Track {
  track: number;
  title: string;
  artist: string;
  duration: string;
  liked: boolean;
}

interface Album {
  img: string;
  title: string;
  type: string;
  year: string;
  liked: boolean;
  tracksList: Array<Track>;
}

const allDiscography: Array<Album> = [
  {
    img: 'https://source.unsplash.com/random/303x303',
    title: 'Scream',
    type: 'Single',
    year: '2006',
    liked: false,

    tracksList: [
      {
        track: 1,
        title: 'scream',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
    ],
  },
  {
    img: 'https://source.unsplash.com/random/303x303',
    title: 'Titre Album',
    type: 'Album',
    year: '2010',
    liked: true,

    tracksList: [
      {
        track: 1,
        title: 'titre',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
      {
        track: 2,
        title: 'titre 2',
        artist: 'Mickael jackson',
        duration: '3min10',
        liked: true,
      },
      {
        track: 3,
        title: 'titre 3',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
    ],
  },
{
    img: 'https://source.unsplash.com/random/303x303',
    title: 'Super titre',
    type: 'Compilation',
    year: '2009',
    liked: true,

    tracksList: [
      {
        track: 1,
        title: 'titre ',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
      {
        track: 2,
        title: 'titre 2',
        artist: 'Mickael jackson',
        duration: '3min10',
        liked: false,
      },
      {
        track: 3,
        title: 'titre 3',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: false,
      },
    ],
  },
];

// == Component =>
const Discography = () => {
  enum TypeAlbum {
    all = 'all',
    single = ' single',
    album = 'album',
    compilation = 'compilation',
  }

  interface AlbumType {
    albumType?: TypeAlbum | undefined;
  }
  const typeAlbum: AlbumType | undefined = useParams();

  const filterDiscography = (
    type: TypeAlbum | undefined,
    albums: Array<Album>
  ) => {
    console.log(type, albums);
    let listAlbums: Array<Album>;
    if (type === TypeAlbum.all) {
      listAlbums = albums;
    } else {
      const filteredAlbums = albums.filter(
        (album) => album.type.toLowerCase() === type?.toLocaleLowerCase()
      );
      filteredAlbums.length === 0
        ? (listAlbums = albums)
        : (listAlbums = filteredAlbums);
    }

    return listAlbums;
  };

  return (
    <Layout>
      <DiscographyHeader artist='Mickael Jackson'/>
      {filterDiscography(typeAlbum.albumType, allDiscography).length > 0 ? (
        filterDiscography(typeAlbum.albumType, allDiscography).map(
          (album, i) => <DiscographyAlbum key={i} {...album} />
        )
      ) : (
        <div>
          <H2 label="Aucun album pour cette artist" />
        </div>
      )}
    </Layout>
  );
};

export default Discography;
