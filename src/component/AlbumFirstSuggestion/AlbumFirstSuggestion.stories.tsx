import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import AlbumFirstSuggestion from './AlbumFirstSuggestion';

import * as cardLastListenStories from '../Cards/CardLastListen.stories';

export default {
  title: 'Lists/Album First Suggestion',
  component: AlbumFirstSuggestion,
  decorators: [withRouter],
} as ComponentMeta<typeof AlbumFirstSuggestion>;

interface Album {
  img: string;
  title: string;
  id: string;
}
type ListAlbum = Array<Album>;

const Template: ComponentStory<typeof AlbumFirstSuggestion> = (args) => (
  <AlbumFirstSuggestion {...args} />
);

const listAlbumFirstSuggestion = [
  {
    ...cardLastListenStories.cardLastListen.args,
  },
  {
    ...cardLastListenStories.cardLastListen.args,
  },
  {
    ...cardLastListenStories.cardLastListen.args,
  },
  {
    ...cardLastListenStories.cardLastListen.args,
  },
  {
    ...cardLastListenStories.cardLastListen.args,
  },
  {
    ...cardLastListenStories.cardLastListen.args,
  },
] as ListAlbum;

export const ListAlbumSuggestion = Template.bind({});
ListAlbumSuggestion.args = { listAlbum: listAlbumFirstSuggestion };
