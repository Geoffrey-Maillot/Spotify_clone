// Import Router
import { Link, useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import H2 from '../component/Typo/H2/H2';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import HeadBandPlay from '../component/HeadBandPlay/HeadBandPlay';
import TabsView from '../component/TabView/TabView';

// Import Icon
import { HiBadgeCheck } from 'react-icons/hi';
import TableArtist from '../component/Tables/TableArtist';
import AlbumList from '../component/AlbumList/AlbumList';

const Artist = () => {
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
  const tracksList = [
    {
      track: 1,

      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre',
      like: 145450,
      duration: '3:21',
      liked: true,
    },
    {
      track: 2,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',

      like: 1956560,
      duration: '3:36',
      liked: false,
    },
    {
      track: 3,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',
      like: 105645,
      duration: '3:36',
      liked: false,
    },
    {
      track: 4,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',
      like: 10895,
      duration: '3:36',
      liked: false,
    },
    {
      track: 5,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',
      like: 10,
      duration: '3:36',
      liked: false,
    },
    {
      track: 6,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',

      like: 10,
      duration: '3:36',
      liked: false,
    },
    {
      track: 7,

      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre super long',
      like: 10,
      duration: '3:36',
      liked: false,
    },
    {
      track: 8,

      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',

      like: 10,
      duration: '3:36',
      liked: false,
    },
    {
      track: 9,

      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',

      like: 10,
      duration: '3:36',
      liked: false,
    },
    {
      track: 10,

      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre 2',

      like: 10,
      duration: '3:36',
      liked: false,
    },
  ];

  const { id } = useParams();

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
        <div className="mb-4 flex items-center justify-start gap-1">
          <HiBadgeCheck size="1.5rem" className="fill-[#3d91f4]" />
          <Paragraph label="Artiste vérifié" color="white" />
        </div>
        <H1 label="Michael Jackson" size="xl8" />
        <span className="mt-4">
          <Paragraph
            size="lg"
            color="white"
            label="30496653 auditeurs par mois"
          />
        </span>
      </header>
      <HeadBandPlay type="artist" />
      <section className="px-8 flex justify-start items-start flex-col xl:flex-row gap-10">
        <div className="w-full">
          <div className="mb-4">
            <H2 size="xl2" color="white" label="Populaires" />
          </div>
          <TableArtist tracksList={tracksList} />
        </div>
        <div className="w-80 flex-none">
          <H2 size="xl2" color="white" label="Sélection de l'artiste" />
          <div className="flex justify-start items-start gap-3 mt-4">
            <div className="w-[4.75rem] h-[4.75rem]">
              <img
                src="https://i.scdn.co/image/ab67706c0000da84d6dc7779ffa596a3d73b4e35"
                alt="Mj"
              />
            </div>
            <div className="flex items-start justify-start flex-col gap-1">
              <div className="bg-white rounded-full w-full p-0.5 flex items-center justify-start">
                <div className="w-6 h-6 mr-2 rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center"
                    src="https://i.scdn.co/image/ab6761610000f178a2a0b9e3448c1e702de9dc90"
                    alt="MJ"
                  />
                </div>
                <Paragraph label="The best of MJ" color="dark" />
              </div>
              <Link
                className="text-white font-circularBold text-lg hover:underline"
                to="/playlist/f49d66f"
              >
                Michael Jackson: Greatest Hits
              </Link>
              <Paragraph label="Playlist" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 mt-10">
        <H2 size="xl2" color="white" label="Discographie" />
        <TabsView artistId={id} />
      </section>
      <section className="px-8 mt-10">
        <AlbumList
          title="Avec Michael Jackson"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Les fans aiment aussi"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Apparaît sur"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Découvert sur"
          albums={albums}
          link={`/section/fdf9854`}
        />
      </section>
    </Layout>
  );
};

export default Artist;
