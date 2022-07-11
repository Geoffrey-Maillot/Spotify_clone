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
import TableEpisodes from '../../component/Tables/TableEpisodes';


const Episodes = () => {
  const { id } = useParams();


const episodesList = [
    {
      img: 'https://source.unsplash.com/random/201x201',
      title: 'Episode 81 - 13 sentinels: Aegis Rim',
      content: `Des lycéens. Des mechas, des kaijus, des boucles temporelles des clones des androïdes des nanomachines des complots des doubles personnalités des souvenirs artificiels... Difficile de trouver un code de la SF que 13 Sentinels: Aegis Rim ne reprend pas à son compte. Le dernier projet de Kamitani et de VanillaWare lorgne du côté du Visual Novel avec une narration éclatée où chaque scénette devient la pièce d'un (trop?) grand puzzle. Mais l'ensemble tient à peu près jusqu'au bout grâce à des choix judicieux dans l'ergonomie et des combats divertissants qui permettent de souffler entre deux twists. Un titre ambitieux donc, qui restera a priori unique dans le catalogue du studio, tant il a été difficile à mener à bien. Merci à nos patreotes qui financent l'émission sur ${(
        <a href="https://www.patreon.com/findugame">
          https://www.patreon.com/findugame
        </a>
      )} Rejoignez le club de lecture sur Discord : discord.gg/YTGbSkN`,
      date: '10 juin',
      duration: 16,
      id: 'fe6fz6',
      isSave: true,
    },
    {
      img: 'https://source.unsplash.com/random/201x201',
      title: 'Episode 81 - 13 sentinels: Aegis Rim',
      content: `Des lycéens. Des mechas, des kaijus, des boucles temporelles des clones des androïdes des nanomachines des complots des doubles personnalités des souvenirs artificiels... Difficile de trouver un code de la SF que 13 Sentinels: Aegis Rim ne reprend pas à son compte. Le dernier projet de Kamitani et de VanillaWare lorgne du côté du Visual Novel avec une narration éclatée où chaque scénette devient la pièce d'un (trop?) grand puzzle. Mais l'ensemble tient à peu près jusqu'au bout grâce à des choix judicieux dans l'ergonomie et des combats divertissants qui permettent de souffler entre deux twists. Un titre ambitieux donc, qui restera a priori unique dans le catalogue du studio, tant il a été difficile à mener à bien. Merci à nos patreotes qui financent l'émission sur ${(
        <a href="https://www.patreon.com/findugame">
          https://www.patreon.com/findugame
        </a>
      )} Rejoignez le club de lecture sur Discord : discord.gg/YTGbSkN`,
      date: '10 juin',
      duration: 16,
      id: 'f46fe6f5',
      isSave: true,
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
        <H1 label="Vos épisodes" />
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
          <Paragraph label='2 épisodes' color='white' size='lg'/>
        </div>
      </header>
      <div className='pt-8 pl-10 pb-4'>
      <ButtonPlay size='large'/>
    </div>
      <div className='max-w-[58.5rem]'>
      <TableEpisodes episodesList={episodesList} />
      </div>
    </Layout>
  );
};

export default Episodes;
