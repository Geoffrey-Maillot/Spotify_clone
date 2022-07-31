// Import Router
import { Link } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import H2 from '../component/Typo/H2/H2';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import PanelHideContent from '../component/UtilsComponents/PanelHideContent';
import HeadBandPlay from '../component/HeadbandPlay/HeadBandPlay';
import CardMusic from '../component/Cards/CardMusic';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';
import { BsCheck2 } from 'react-icons/bs';

const Episode = () => {
  const listen = true;

  const related = [
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
    {
      img: 'https://source.unsplash.com/random/300x300',
      imgAlt: 'https://source.unsplash.com/random/40x40',
      title: "Episode 80 - Majora's Mask",
      date: '10 Juin',
      duration: '99 min',
    },
  ];

  return (
    <Layout>
      <header
        className="h-[22rem] w-full flex flex-col justify-end items-start px-8 pb-6"
        style={{
          background:
            'url(https://source.unsplash.com/random/1900x600) center center no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <span className="mb-4">
          <H2 label="Épisode Podcast" />
        </span>
        <H1 size="xl7" label="Episode 81 - 13 sentinels: Aegis Rim" />
        <span className="mt-4">
          <H2 size="xl2" color="white" label="Fin du Game" />
        </span>
      </header>
      <section className="px-10 pt-8 flex items-center justify-start gap-1">
        <Paragraph label="27 juin" />
        <GoPrimitiveDot color="#b3b3b3" size=".4rem" />
        {listen ? (
          <div className="flex items-center justify-start gap-2">
            <Paragraph label="Écouté" />
            <BsCheck2 className="text-green-200" size="1.4rem" />
          </div>
        ) : (
          <Paragraph label="1h26" />
        )}
      </section>
      <HeadBandPlay type="episode" />
      <section className="max-w-[42rem] pl-8 pr-4 mt-4 flex flex-col items-start justify-start gap-8">
        <H2 size="xl2" label="Description de l'épisode" />
        <PanelHideContent>
          <Paragraph size="lg" truncate={false}>
            Des lycéens. Des mechas, des kaijus, des boucles temporelles des
            clones des androïdes des nanomachines des complots des doubles
            personnalités des souvenirs artificiels... Difficile de trouver un
            code de la SF que 13 Sentinels: Aegis Rim ne reprend pas à son
            compte. Le dernier projet de Kamitani et de VanillaWare lorgne du
            côté du Visual Novel avec une narration éclatée où chaque scénette
            devient la pièce d'un (trop?) grand puzzle. Mais l'ensemble tient à
            peu près jusqu'au bout grâce à des choix judicieux dans l'ergonomie
            et des combats divertissants qui permettent de souffler entre deux
            twists. Un titre ambitieux donc, qui restera a priori unique dans le
            catalogue du studio, tant il a été difficile à mener à bien. Merci à
            nos patreotes qui financent l'émission sur
            https://patreon.com/findugame Rejoignez le club de lecture sur
            Discord : discord.gg/YTGbSkN
          </Paragraph>
        </PanelHideContent>
        <Link
          className="border border-gray-200  rounded-full px-4 py-2 hover:scale-105"
          to={`/show/ff4e6e5`}
        >
          {' '}
          <H2 label="Voir tous les épisodes" />{' '}
        </Link>
      </section>
      <section className="px-8 mt-8 mb-10">
        <H2 size="xl2" label="Vous devriez aussi aimez" />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] gap-4 mt-4 ">
          {related.map((episode, i) => (
            <div key={i} className="">
              <CardMusic type="episode" {...episode} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Episode;
