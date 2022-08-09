import { useState, useEffect } from 'react';

// Import Router
import { useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H2 from '../component/Typo/H2/H2';
import DiscographyAlbum from '../component/Discography/DiscographyAlbumList';
import DiscographyHeader from '../component/Discography/DiscographyHeader';
import Grid from '../component/Grid/Grid';
import CardMusic from '../component/Cards/CardMusic';

import { PageLayout } from '../component/Discography/DiscographyHeader';

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
  const [filteredAlbums, setFilteredAlbums] = useState<Array<Album>>([]);
  const [pageLayout, setPageLayout] = useState<PageLayout>(PageLayout.List);

  const { albumType } = useParams();

  const filterDiscography = (
    type: string | undefined,
    albums: Array<Album>
  ) => {
    if (albumType === 'all') {
      setFilteredAlbums(albums);
    } else {
      const filteredAlbums = albums.filter(
        (album) => album.type.toLowerCase() === type?.toLocaleLowerCase()
      );
      filteredAlbums.length === 0
        ? setFilteredAlbums(albums)
        : setFilteredAlbums(filteredAlbums);
    }
  };

  useEffect(() => {
    const pageLayoutFromStorage = localStorage.getItem(
      'pageLayout'
    ) as PageLayout;
    if (pageLayoutFromStorage) {
      setPageLayout(pageLayoutFromStorage);
    }
  }, []);

  useEffect(() => {
    filterDiscography(albumType, allDiscography);
  }, [albumType]);

  return (
    <Layout>
      <DiscographyHeader
        artist="Mickael Jackson"
        pageLayout={pageLayout}
        setPageLayout={setPageLayout}
      />
      {filteredAlbums.length > 0 ? (
        pageLayout === PageLayout.List ? (
          filteredAlbums.map((album, i) => (
            <DiscographyAlbum key={i} {...album} />
          ))
        ) : (
          <div className="px-8">
            <Grid>
              {filteredAlbums.map((album, i) => (
                <CardMusic
                  key={i}
                  title={album.title}
                  img={album.img}
                  content={album.year}
                />
              ))}
            </Grid>
          </div>
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
