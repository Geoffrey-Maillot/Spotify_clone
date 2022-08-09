import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import SearchDialog from './SearchDialog';
import H2 from '../Typo/H2/H2';

export default {
  title: 'SearchDialog',
  component: SearchDialog,
  decorators: [
    withRouter,
    (story) => (
      <div>
        {' '}
        <H2 label="Dialog visible uniquement jusqu'à un viewport de maximum 640px" />{' '}
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof SearchDialog>;

const Template: ComponentStory<typeof SearchDialog> = (args) => (
  <SearchDialog {...args} />
);

interface Props {
  isOpen: boolean;
  onHide: () => void;
}

const args: Props = {
  isOpen: true,
  onHide: () => {},
};

export const searchDialog = Template.bind({});
searchDialog.story = {
  args,
  parameters: {
    reactRouter: {
      routePath: '/search',
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
