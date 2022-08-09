import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import DiscographyAlbumList from './DiscographyAlbumList';


export default {
  title: 'DiscographyAlbumList',
  component: DiscographyAlbumList,
  decorators: [withRouter],
} as ComponentMeta<typeof DiscographyAlbumList>;

const Template: ComponentStory<typeof DiscographyAlbumList> = (args) => (
  <DiscographyAlbumList {...args} />
);

const album = {
  img: 'https://source.unsplash.com/random/303x303',
  title: 'Titre Album',
  type: 'Album',
  year: '2010',
  liked: true,

  tracksList: [
    {
      track: 1,
      title: 'titre',
      artist: 'Mickael jackson',
      duration: '3min25',
      liked: true,
    },
    {
      track: 2,
      title: 'titre 2',
      artist: 'Mickael jackson',
      duration: '3min10',
      liked: true,
    },
    {
      track: 3,
      title: 'titre 3',
      artist: 'Mickael jackson',
      duration: '3min25',
      liked: true,
    },
  ],
};

export const discographyAlbumList = Template.bind({});
discographyAlbumList.args = {
  ...album,
};
