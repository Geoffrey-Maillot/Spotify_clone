import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Form from './Form';

export default {
  title: 'form/loginForm',
  component: Form,
  decorators: [withRouter],
  parameters: {
    backgrounds: {
      default: 'test',
      values: [{ name: 'test', value: '#fff' }],
    },
  },
  argTypes: {
    register: { control: false },

    type: { control: false },
    inputName: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const loginForm = Template.bind({});
