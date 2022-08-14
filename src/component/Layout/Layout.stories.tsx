import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';


import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withRouter]
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

const Content = () => 
  <div className='w-full h-32 flex justify-center items-center font-circularBold font-bold text-2xl text-white'> Content </div>


export const layout = Template.bind({});
layout.args = {
  children : <Content />
}

