import { ComponentStory, ComponentMeta } from '@storybook/react';

import H1 from './H1';

export default {

  title: 'Text/H1',
  component: H1,
} as ComponentMeta<typeof H1>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Title H1' };
