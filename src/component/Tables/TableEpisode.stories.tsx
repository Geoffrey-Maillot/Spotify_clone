import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import TableEpisodes from './TableEpisodes';
export default {
  title: 'Tables/Episodes',
  component: TableEpisodes,
  decorators: [withRouter],
} as ComponentMeta<typeof TableEpisodes>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TableEpisodes> = (args) => (
  <TableEpisodes {...args} />
);

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

export const episodes = Template.bind({});
episodes.args = {
  episodesList: episodesList,
};
