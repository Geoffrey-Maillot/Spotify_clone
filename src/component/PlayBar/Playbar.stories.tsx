import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayBar from './PlayBar';

export default {
  title: 'Playbar',
  component: PlayBar,
} as ComponentMeta<typeof PlayBar>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PlayBar> = (args) => <PlayBar />;

export const playbar = Template.bind({});
