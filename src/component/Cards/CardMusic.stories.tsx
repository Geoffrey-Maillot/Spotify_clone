import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import CardMusic from './CardMusic';

export default {
  title: 'Card/CardMusic',
  component: CardMusic,
  decorators: [withRouter],
} as ComponentMeta<typeof CardMusic>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CardMusic> = (args) => (
  <CardMusic {...args} />
);

export const cardMusic = Template.bind({});
