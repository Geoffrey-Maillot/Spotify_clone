import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import LikedTraksLink from './LikedTraksLink';
export default {
  title: 'Menu/LikedTracksLink',
  component: LikedTraksLink,
  decorators: [withRouter],
} as ComponentMeta<typeof LikedTraksLink>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LikedTraksLink> = (args) => (
  <LikedTraksLink {...args} />
);

export const likedTracksLink = Template.bind({});
likedTracksLink.args = {
  to: '#',
};
