import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from './Paragraph';

//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

//๐ We create a โtemplateโ of how args map to rendering
const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = { label: 'Small text', size: 'sm' };
