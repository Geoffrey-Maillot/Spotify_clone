import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableTracks from './TableTracks';
export default {
  title: 'Tables/Tracks',
  component: TableTracks,
} as ComponentMeta<typeof TableTracks>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TableTracks> = (args) => (
  <TableTracks {...args} />
);

const tracksList = [
  {
    track: 1,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre un peu beaucoup long pour tester les trois ti point',
    artist: 'Artiste',
    album: 'Album super long aussi',
    added: 10,
    duration: '3:21',
    liked: true,
  },
  {
    track: 2,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 3,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 4,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 5,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 6,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 7,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'titre super long',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 8,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 9,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
  {
    track: 10,
    img: 'https://source.unsplash.com/random/64x64',
    title: 'Titre 2',
    artist: 'Artiste 2',
    album: 'Album 2',
    added: 10,
    duration: '3:36',
    liked: false,
  },
];

export const tracks = Template.bind({});
tracks.args = {
  tracksList: tracksList,
  isLoading: false,
  isFetching: false,
};
