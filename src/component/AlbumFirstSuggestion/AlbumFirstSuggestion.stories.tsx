import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import AlbumFirstSuggestion from './AlbumFirstSuggestion';

export default {
  title: 'Lists/Album First Suggestion',
  component: AlbumFirstSuggestion,
  decorators: [withRouter],
} as ComponentMeta<typeof AlbumFirstSuggestion>;

const Template: ComponentStory<typeof AlbumFirstSuggestion> = (args) => (
  <AlbumFirstSuggestion {...args} />
);

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

export const ListAlbumSuggestion = Template.bind({});
ListAlbumSuggestion.args = { listAlbum: listAlbumFirstSuggestion };
