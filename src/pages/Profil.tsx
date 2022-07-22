// Import component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import H2 from '../component/Typo/H2/H2';
import Paragraph from '../component/Typo/Paragraph/Paragraph';

// Import Icon
import { GoPrimitiveDot } from 'react-icons/go';
import AlbumList from '../component/AlbumList/AlbumList';

// Interface
import { Album } from '../service/interface/Album';
import TableProfil from '../component/Tables/TableProfil';

const topArtists: Array<Album> = [
  {
    img: 'https://i.scdn.co/image/ab67616100005174c2f3c2db3aa6f86aa810f7d4',
    title: 'Nneka',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab6761610000517495a14413f9430851ec1941eb',
    title: 'Rousseau',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174dfaa7347b64261717901a4d7',
    title: 'Scylla',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab6761610000f17824dfcd336d5f992814d54972',
    title: 'Sofiane Pamart',
    content: 'Artiste',
    type: 'artist',
  },
];

const tracks = [
  {
    track: 1,
    img: 'https://i.scdn.co/image/ab67616d00004851b3ad90e190d2f16829037fe1',
    title: 'Château dans le ciel',
    artist: 'Scylla',
    album: 'Pleine Lune',
    duration: '3:04',
    liked: false,
  },
  {
    track: 2,
    img: 'https://i.scdn.co/image/ab67616d00004851fac742558be499d2d0b74d11',
    title: 'Koulè',
    artist: 'Krys, Tiwony',
    album: 'Koulè',
    duration: '3:23',
    liked: false,
  },
  {
    track: 3,
    img: 'https://i.scdn.co/image/ab67616d00001e021bb21d27effb96a1d0fe8d6d',
    title: 'Smooth Criminal - 2012 Remaster',
    artist: 'Mickael Jackson',
    album: 'Bad 25th Anniversary',
    duration: '4:17',
    liked: false,
  },
  {
    track: 4,
    img: 'https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be',
    title: 'Billie Jean',
    artist: 'Mickael Jackson',
    album: 'Thriller',
    duration: '4:53',
    liked: false,
  },
];

const albums = [
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

const abonnés: Array<Album> = [
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Jimmy Garcia',
    content: 'Profil',
    type: 'user',
  },
  {
    img: 'https://source.unsplash.com/random/300x300',
    title: 'Julien B.',
    content: 'Profil',
    type: 'user',
  },
];

const abonnées: Array<Album> = [
  {
    img: 'https://i.scdn.co/image/ab67616100005174c2f3c2db3aa6f86aa810f7d4',
    title: 'Nneka',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab6761610000517495a14413f9430851ec1941eb',
    title: 'Rousseau',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02976bcd0c353a3a85006080ac',
    title: 'Kaf malbar',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02c817de6f6d4bf8f2d069f62a',
    title: 'Cassiya',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e021bb72304e120d4633ee16237',
    title: 'Ousanousava',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174a2a0b9e3448c1e702de9dc90',
    title: 'Mickael Jackson',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab676161000051745796c88846b0bbecb07fccfc',
    title: 'Skillet',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174ee20ac45eacc19a559507d67',
    title: 'Gentleman',
    content: 'Artiste',
    type: 'artist',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174fad69ba2257abfdd56eb9dec',
    title: "Jacob's Piano",
    content: 'Artiste',
    type: 'artist',
  },
];

// == Component =>
const Profil = () => (
  <Layout>
    <header
      className="h-[22rem] w-full flex justify-start items-end gap-10 px-8 pb-6 "
      style={{
        background:
          'url(https://source.unsplash.com/random/1900x600) center center no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className=" w-[12rem] h:[12rem] xl:w-[14.5rem] xl:h-[14.5rem] rounded-full overflow-hidden  hidden sm:block">
        <img
          className="object-cover object-center"
          src="https://source.unsplash.com/random/300x300"
          alt="Unsplash"
        />
      </div>
      <div className="flex flex-col justify-end items-start">
        <span className="mb-4">
          <H2 label="PROFIL" />
        </span>
        <H1 label="Titres Likés" size="xl8" />
        <div className="mt-4 flex items-center justify-start gap-1">
          <div className="w-6 h-6 rounded-full object-cover object-center overflow-hidden">
            <img
              src="https://source.unsplash.com/random/30x30"
              alt="Unsplash"
            />
          </div>
          <H2 size="lg" color="white" label="Geoffrey Maillot" />
          <GoPrimitiveDot color="white" size=".5rem" />
          <Paragraph label="418 titres" color="white" size="lg" />
        </div>
      </div>
    </header>
    <section className="px-8 pt-6 grid gap-8">
      <AlbumList
        title="Top artistes du mois"
        subTitle="Visibles uniquement par vous"
        albums={topArtists}
        link={'/section/4ffe55'}
      />
      <div>
        <H2 label="Top titres du mois" size="xl2" />
        <Paragraph label="Vsible uniquement par vous" />
        <TableProfil tracksList={tracks} />
      </div>

      <AlbumList
        title="Playlist publiques"
        albums={albums}
        link={'/section/4ffe55'}
      />
      <AlbumList title="Abonnés" albums={abonnés} link={'/section/4ffe55'} />
      <AlbumList title="Abonnés" albums={abonnées} link={'/section/4ffe55'} />
    </section>
  </Layout>
);

export default Profil;
