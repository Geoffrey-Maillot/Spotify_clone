import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavLink from './NavLink';

export default {
  title: 'Menu/NavLink',
  component: NavLink,
  decorators: [withRouter],
} as ComponentMeta<typeof NavLink>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const navLink = Template.bind({});
navLink.args = { to: '/', label: 'Nav Link' };
