// Import Router
import { useParams } from 'react-router-dom';

//Import Component
import AlbumList from '../component/AlbumList/AlbumList';
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';

const GenrePage = () => {
  const slug = useParams();
  console.log(slug);

  const listGenre = [
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
    {
      img: 'https://source.unsplash.com/random/400x400/',
      title: 'Top of the Rock',
      content: 'Les meilleurs titres de Rock',
    },
  ];

  return (
    <Layout>
      <span className=" block pt-28 px-8 pb-14">
        {/*TODO: Mettre le titre dans un Header / Conditionner le Titre / Conditionner un Bg => Voir Spotify */}
        <H1>Rock</H1>
      </span>
      <div className="px-8 pt-6 grid gap-6 ">
        <AlbumList title="Playlist populaire" albums={listGenre} link={'/genre/dqd4545'}/>
        <AlbumList title="Playlist populaire" albums={listGenre} link={'/genre/8s5552c'}/>
        <AlbumList title="Playlist populaire" albums={listGenre} link={'/genre/s985552d'}/>
      </div>
    </Layout>
  );
};

export default GenrePage;
