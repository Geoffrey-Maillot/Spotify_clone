import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonPlayLight from './ButtonPlayLight';

export default {
  title: 'Button/ButtonPlayLight',
  component: ButtonPlayLight,
} as ComponentMeta<typeof ButtonPlayLight>;

const Template: ComponentStory<typeof ButtonPlayLight> = () => (
  <ButtonPlayLight />
);

export const Default = Template.bind({});
