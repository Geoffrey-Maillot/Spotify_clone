import { ComponentStory, ComponentMeta } from '@storybook/react';

import H1 from './H1';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text/H1',
  component: H1,
} as ComponentMeta<typeof H1>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Title H1' };
