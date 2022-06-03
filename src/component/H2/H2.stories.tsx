import { ComponentStory, ComponentMeta } from '@storybook/react';

import H2 from './H2';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text/H2',
  component: H2,
} as ComponentMeta<typeof H2>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Title H2', size: 'sm' };
