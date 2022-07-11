import React from 'react';

// Import Component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import DiscographyAlbum from '../../component/DiscographyAlbum/DiscographyAlbum';

const allDiscography = [
  {
    img: 'https://source.unsplash.com/random/303x303',
    title: 'Scream',
    type: 'single',
    year: '2006',
    liked: false,

    trackList: [
      {
        title: 'scream',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
    ],
  },
];

const DiscographyAll = () => (
  <Layout>
    {allDiscography.length > 0 ? (
      allDiscography.map((album, i) => <DiscographyAlbum key={i} {...album} />)
    ) : (
      <div>
        <H2 label="Aucun album pour cet artist" />
      </div>
    )}
  </Layout>
);

export default DiscographyAll;
