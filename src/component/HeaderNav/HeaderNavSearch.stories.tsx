import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import HeaderNav from './HeaderNav';

export default {
  title: 'Header/HeaderNav/Search',
  component: HeaderNav,
  decorators: [withRouter],
} as ComponentMeta<typeof HeaderNav>;

const Template: ComponentStory<typeof HeaderNav> = () => <HeaderNav />;

export const searchHeader = Template;
searchHeader.story = {
  parameters: {
    reactRouter: {
      routePath: '/search',
    },
  },
};
