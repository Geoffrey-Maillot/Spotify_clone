import { ComponentStory, ComponentMeta } from '@storybook/react';

import { withRouter } from 'storybook-addon-react-router-v6';

import Grid from './Grid';
import CardMusic from '../Cards/CardMusic';
import CardGender from '../Cards/CardGender';

export default {
  title: 'Grid',
  component: Grid,
  decorators: [withRouter],
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const dataCardMusic = [
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
  <CardMusic />,
];

export const gridCardMusic = Template.bind({});
gridCardMusic.args = {
  children: dataCardMusic,
};

const argsCardGender = {
  title: 'Titre',
  img: 'https://source.unsplash.com/random/201x201',
  alt: 'Image Alt',
  color: '#7695c9',
  size: 'small',
  id: 'id12345',
};

const dataCardGender = [
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
  <CardGender {...argsCardGender} />,
];

export const gridCardGender = Template.bind({});
gridCardGender.args = {
  children: dataCardGender,
};

