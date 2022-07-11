// Import Router
import { useParams } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';

// Import Component
import Layout from '../../component/Layout/Layout';
import H1 from '../../component/Typo/H1/H1';
import Paragraph from '../../component/Typo/Paragraph/Paragraph';
import H2 from '../../component/Typo/H2/H2';
import TableTracks from '../../component/Tables/TableTracks';
import ButtonPlay from '../../component/Button/ButtonPlay/ButtonPlay';


const LikedTracks = () => {
  const { id } = useParams();


  const tracksList = [
    {
      track: 1,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre',
        artist: 'Artiste',
      },
      album: 'Album',
      added: 10,
      duration: '3:21',
      liked: true,
    },
    {
      track: 2,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 3,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 4,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 5,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 6,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 7,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre super long',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 8,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 9,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
    {
      track: 10,
      title: {
        img: 'https://source.unsplash.com/random/64x64',
        name: 'Titre 2',
        artist: 'Artiste 2',
      },
      album: 'Album 2',
      added: 10,
      duration: '3:36',
      liked: true,
    },
  ];

  return (
    <Layout>
      <header
        className="h-[22rem] w-full flex flex-col justify-end items-start px-8 pb-6 ]"
        style={{
          background:
            'url(https://source.unsplash.com/random/1900x600) center center no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <span className="mb-4">
          <H2 label="PLAYLIST" />
        </span>
        <H1 label="Titres Likés" />
        <div className="mt-4 flex items-center justify-start gap-1">
          <div className='w-6 h-6 rounded-full object-cover object-center overflow-hidden'>
            <img src="https://source.unsplash.com/random/30x30" alt="Unsplash" />
          </div>
          <H2
            size="lg"
            color="white"
            label="Geoffrey Maillot"
          />
          <GoPrimitiveDot color='white' size='.5rem'/>
          <Paragraph label='418 titres' color='white' size='lg'/>
        </div>
      </header>
      <div className='pt-8 pl-10 pb-4'>
      <ButtonPlay size='large'/>
    </div>
      <TableTracks tracksList={tracksList} />
    </Layout>
  );
};

export default LikedTracks;
