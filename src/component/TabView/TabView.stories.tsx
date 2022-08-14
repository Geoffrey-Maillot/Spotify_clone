import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


import TabsView from './TabView';

export default {
  title: 'TabView',
  component: TabsView,
  decorators: [withRouter]
} as ComponentMeta<typeof TabsView>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TabsView> = (args) => (
  <TabsView {...args} />
);

export const tabsView = Template.bind({});
tabsView.args = {
  artistId: 'artistId',
};
