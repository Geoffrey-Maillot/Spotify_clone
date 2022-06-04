import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonPlay from './ButtonPlay';

export default {
  title: 'Component/ButtonPlay',
  component: ButtonPlay,
} as ComponentMeta<typeof ButtonPlay>;

const Template: ComponentStory<typeof ButtonPlay> = (args) => (
  <ButtonPlay {...args} />
);

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const Large = Template.bind({});
Large.args = { size: 'large' };
