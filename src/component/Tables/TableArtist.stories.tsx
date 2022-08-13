import { ComponentStory, ComponentMeta } from '@storybook/react';

import TableArtist from './TableArtist';
import { Track } from '../../service/interface/Album';

export default {
  title: 'Tables/Artist',
  component: TableArtist,
} as ComponentMeta<typeof TableArtist>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TableArtist> = (args) => <TableArtist {...args}/>;

  const tracksList: Array<Track> = [
    {
      track: 1,
      img: 'https://source.unsplash.com/random/64x64',
      title: 'Titre qui peu être long, voir très long voire encore plus long',
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

export const artist = Template.bind({});
artist.args = {
tracksList: tracksList 
  }
