import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import DiscographyHeader from './DiscographyHeader';
import { PageLayout } from './DiscographyHeader';

export default {
  title: 'Discographie/DiscographyHeader',
  component: DiscographyHeader,
  decorators: [withRouter],
} as ComponentMeta<typeof DiscographyHeader>;

const Template: ComponentStory<typeof DiscographyHeader> = (args) => (
  <DiscographyHeader {...args} />
);

export const discographyHeader = Template.bind({});
discographyHeader.args = {
  artist: 'Mickael jackson',
  pageLayout: PageLayout.List,
  setPageLayout: () => {},
};
