import { useState } from 'react';
// Import Router
import { useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import H2 from '../component/Typo/H2/H2';
import PlaylistTable from '../component/Tables/TableEpisodes';
import HeadBandPlay from '../component/HeadBandPlay/HeadBandPlay';
import PanelHideContent from '../component/UtilsComponents/PanelHideContent';

interface Props {
  isLikedTracks?: boolean;
}

const Podcast = ({ isLikedTracks = false }: Props) => {
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
      isSave: false,
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
          <H2 label="PODCAST" />
        </span>
        <H1 label="Nota Bene" />
        <span className="mt-4">
          <H2 size="xl2" color="white" label="Benjamin Brillaud" />
        </span>
      </header>
      <HeadBandPlay type="podcast" subscriber={true} />
      <div className="flex items-start justify-start pl-4 gap-4 xl:flex-row flex-col-reverse">
        <div className=" xl:w-3/5 w-full max-w-[726px] xl:max-w-max">
          <PlaylistTable episodesList={episodesList} />
        </div>
        <div className="flex flex-col justify-start items-start gap-6  xl:w-2/5 w-full max-w-[726px] xl:max-w-max px-4">
          <span className="pt-4">
            <H2 size="xl2" label="Plus d'infos" />
          </span>
          <PanelHideContent>
            <Paragraph size="lg" truncate={false}>
              Nota Bene, c'est une autre façon de découvrir l'Histoire de France
              et du monde ! L'Histoire est sociale, économique, scientifique,
              politique, elle touche à tous les domaines. A travers des
              émissions thématiques et des entretiens avec des historiens,
              archéologues et chercheurs, voyagez de l'Antiquité à nos jours et
              redécouvrez la richesse de cette Histoire !
            </Paragraph>
          </PanelHideContent>

          <div>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Culture
            </span>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Histoire
            </span>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Science
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;
