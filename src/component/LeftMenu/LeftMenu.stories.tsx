import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import LeftMenu from './LeftMenu';

export default {
  title: 'Menu/LeftMenu',
  component: LeftMenu,
  decorators: [withRouter, (story) => (<div style={{height: '100vh', width: '320px'}}>{story()}</div>)],
} as ComponentMeta<typeof LeftMenu>;

const Template: ComponentStory<typeof LeftMenu> = () => <LeftMenu />;

export const leftMenu = Template.bind({});
