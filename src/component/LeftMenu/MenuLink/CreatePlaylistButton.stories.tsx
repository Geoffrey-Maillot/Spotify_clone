import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CreatePlaylistButton from './CreatePlaylistButton';



export default {
  title: 'Menu/CreatePlaylistButton',
  component: CreatePlaylistButton,
  decorators: [withRouter],
} as ComponentMeta<typeof CreatePlaylistButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CreatePlaylistButton> = () => (
  <CreatePlaylistButton  />
);




export const createPlaylistButton = Template.bind({});