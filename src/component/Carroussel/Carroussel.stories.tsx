import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Carroussel from './Carroussel';

export default {
  title: 'Carroussel',
  component: Carroussel,
  decorators: [
    withRouter,
    (story) => <div style={{ height: '300px' }}>{story()}</div>,
  ],
} as ComponentMeta<typeof Carroussel>;

const dataPreferGender = [
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
  },
];

const Template: ComponentStory<typeof Carroussel> = (args) => (
  <Carroussel {...args} />
);

export const carroussel = Template.bind({});
carroussel.args = { cards: dataPreferGender };
