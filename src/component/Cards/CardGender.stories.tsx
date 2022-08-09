import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CardGender from './CardGender';

export default {
  title: 'Card/CardGender',
  component: CardGender,
  decorators: [
    withRouter,
    (story) => <div style={{ height: '220px', width: '220px' }}>{story()}</div>,
  ],
} as ComponentMeta<typeof CardGender>;

const Template: ComponentStory<typeof CardGender> = (args) => (
  <CardGender {...args} />
);

export const cardGender = Template.bind({});
