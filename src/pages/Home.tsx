// Import Component
import Layout from '../component/Layout/Layout';

import AlbumFirstSuggestion from '../component/AlbumFirstSuggestion/AlbumFirstSuggestion';
import AlbumList from '../component/AlbumList/AlbumList';

const listAlbumFirstSuggestion = [
  {
    title: 'Summer Hit 2022',
    img: 'https://source.unsplash.com/random/101x101',
  },
  {
    title: 'Afro Nation 2022',
    img: 'https://source.unsplash.com/random/102x102',
  },
  {
    title: 'Zouk',
    img: 'https://source.unsplash.com/random/103x103',
  },

  {
    title: 'System of a Down',
    img: 'https://source.unsplash.com/random/104x104',
  },

  {
    title: 'This is Naza',
    img: 'https://source.unsplash.com/random/105x105',
  },
  {
    title: 'This is Admiral T',
    img: 'https://source.unsplash.com/random/106x106',
  },
];

const albumNews = [
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
];

const Home = () => (
  <Layout>
    <div className=" px-4 sm:px-8 pt-6 grid gap-6 ">
      <AlbumFirstSuggestion listAlbum={listAlbumFirstSuggestion} />
      <AlbumList
        title="Réécoutez vos anciens favoris"
        albums={albumNews}
        link={'section/idgenre'}
      />
      <AlbumList
        title="Nouveautés tendance"
        subTitle="Des playlists rassemblant toutes les dernières nouveautés"
        albums={albumNews}
        link={'/section/4ffe55'}
      />
      <AlbumList
        title="Place au contenu que vous aimez"
        subTitle="Ecoutez tous ce que vous adorez"
        albums={albumNews}
        link={'/section/fef84'}
      />
      <AlbumList
        title="Ecoutés récemment"
        albums={albumNews}
        link="genre/dd4441dd7"
      />
      <AlbumList
        title="Populaire chez les auditeurs de Artisan Développeur"
        albums={albumNews}
        link={'/section/zfzef45'}
      />
      <AlbumList
        title="A ne pas manquer aujourd'hui"
        subTitle="Des playlists rassemblant toutes les dernières nouveautés"
        albums={albumNews}
        link={'/section/fzef8f54z4f'}
      />
      <AlbumList
        title="Lié à vos écoutes récentes"
        subTitle="Des playlists rassemblant toutes les dernières nouveautés"
        albums={albumNews}
        link={'/section/dzfe855'}
      />
      <AlbumList
        title="Conçu pour Maillot Geoffrey"
        subTitle="Des playlists rassemblant toutes les dernières nouveautés"
        albums={albumNews}
        link={'/section/fze8f445'}
      />
    </div>
  </Layout>
);

export default Home;
