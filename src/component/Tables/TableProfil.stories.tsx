import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import TableProfil from './TableProfil';
import { Track } from '../../service/interface/Album';

export default {
  title: 'Tables/Profil',
  component: TableProfil,
  decorators: [withRouter],
} as ComponentMeta<typeof TableProfil>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TableProfil> = (args) => (
  <TableProfil {...args} />
);

const tracks: Array<Track> = [
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

export const profil = Template.bind({});
profil.args = {
  tracksList: tracks,
};
