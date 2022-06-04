import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import CardLastListen from './CardLastListen';

export default {
  title: 'Card/CardLastListen',
  component: CardLastListen,
  decorators: [withRouter],
} as ComponentMeta<typeof CardLastListen>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CardLastListen> = (args) => (
  <CardLastListen {...args} />
);

export const cardLastListen = Template.bind({});
