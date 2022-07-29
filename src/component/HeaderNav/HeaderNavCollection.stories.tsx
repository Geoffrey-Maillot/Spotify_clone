import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import HeaderNav from './HeaderNav';

export default {
  title: 'Header/HeaderNav/Collection',
  component: HeaderNav,
  decorators: [withRouter],
} as ComponentMeta<typeof HeaderNav>;

const Template: ComponentStory<typeof HeaderNav> = () => (
  <HeaderNav panelSize={320} togglePanelLeft={() => {}} />
);

export const collectionHeader = Template;
collectionHeader.story = {
  parameters: {
    reactRouter: {
      routePath: '/collection',
    },
  },
};
