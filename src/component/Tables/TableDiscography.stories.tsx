import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableDiscography from './TableDiscography';

export default {
  title: 'Tables/Discographie',
  component: TableDiscography,
} as ComponentMeta<typeof TableDiscography>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TableDiscography> = (args) => <TableDiscography {...args}/>;

const tracklist = [

      {
        track: 1,
        title: 'titre',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
      {
        track: 2,
        title: 'titre 2',
        artist: 'Mickael jackson',
        duration: '3min10',
        liked: true,
      },
      {
        track: 3,
        title: 'titre 3',
        artist: 'Mickael jackson',
        duration: '3min25',
        liked: true,
      },
    ]

export const discographie = Template.bind({});
discographie.args = {
tracksList: tracklist 
  }
