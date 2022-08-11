import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import HeaderBandPlay from './HeaderBandPlay';

export default {
  title: 'HeaderBandPlay',
  component: HeaderBandPlay,
  decorators: [withRouter],
} as ComponentMeta<typeof HeaderBandPlay>;

const Template: ComponentStory<typeof HeaderBandPlay> = (args) => (
  <HeaderBandPlay {...args} />
);

export const artist = Template.bind({});
artist.args = { type: 'artist' };

export const playlist = Template.bind({});
playlist.args = { type: 'playlist' };

export const podcast = Template.bind({});
podcast.args = { type: 'podcast' };

export const episode = Template.bind({});
episode.args = { type: 'episode' };
