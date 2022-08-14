import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import EpisodeLink from './EpisodeLink';


export default {
  title: 'Menu/EpisodeLink',
  component: EpisodeLink,
  decorators: [withRouter],
} as ComponentMeta<typeof EpisodeLink>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof EpisodeLink> = (args) => (
  <EpisodeLink  {...args}/>
);




export const episodeLink = Template.bind({});