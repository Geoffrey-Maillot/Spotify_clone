import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import HeaderNav from './HeaderNav';

export default {
  title: 'Header/HeaderNav',
  component: HeaderNav,
  decorators: [withRouter],
} as ComponentMeta<typeof HeaderNav>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HeaderNav> = () => <HeaderNav />;

export const headerNav = Template;
