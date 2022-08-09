import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import CardFirst from './CardFirst';

export default {
  title: 'Card/CardFirst',
  component: CardFirst,
  decorators: [
    withRouter,
    (story) => <div style={{ height: '300px', width: '450px' }}>{story()}</div>,
  ],
} as ComponentMeta<typeof CardFirst>;

const Template: ComponentStory<typeof CardFirst> = (args) => (
  <CardFirst {...args} />
);

export const Playlist = Template.bind({});
Playlist.args = { type: 'playlist' };

export const Podcast = Template.bind({});
Playlist.args = { type: 'podcast' };
