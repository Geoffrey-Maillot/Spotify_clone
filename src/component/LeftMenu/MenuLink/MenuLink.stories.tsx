import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import MenuLink from './MenuLink';



export default {
  title: 'Menu/MenuLink',
  component: MenuLink,
  decorators: [withRouter],
} as ComponentMeta<typeof MenuLink>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MenuLink> = (args) => (
  <MenuLink {...args} />
);

export const Default = Template.bind({});
Default.args = { label: 'Nav Link', to: '/' };

export const WithIcon = Template.bind({});
WithIcon.args = { label: 'With icon', icon: true, to: '/' };

