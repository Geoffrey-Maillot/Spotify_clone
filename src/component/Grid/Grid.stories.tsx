import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from './Grid';
import CardMusicStories from '../Cards/CardMusic.stories';

export default {
  title: 'layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const data = () => <CardMusicStories />;

export const grid = Template.bind({});
grid.args = [];
