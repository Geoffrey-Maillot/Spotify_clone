import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import LeftMenu from './LeftMenu';

export default {
  title: 'Menu/LeftMenu',
  component: LeftMenu,
  decorators: [withRouter],
} as ComponentMeta<typeof LeftMenu>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LeftMenu> = (args) => <LeftMenu />;

export const Menu = Template.bind({});
