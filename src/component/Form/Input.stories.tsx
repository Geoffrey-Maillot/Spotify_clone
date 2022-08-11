import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from './Input';
import { InputType, InputName } from './Input';
import { Inputs } from './Form';

export default {
  title: 'form/Input',
  component: Input,
  decorators: [withRouter],
  argTypes: {
    register: { control: false },

    type: { control: false },
    inputName: { control: { type: 'select' } },
  },
} as ComponentMeta<typeof Input>;

const schema = yup.object({
  pseudo: yup.string().required('Remplir le champs'),
  password: yup.string().required('Remplir le champs'),
});

const Template: ComponentStory<typeof Input> = (args) => {
  const { register } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  return <Input {...args} register={register} />;
};

export const pseudo = Template.bind({});
pseudo.args = {
  type: InputType.Text,
  placeholder: 'Placeholder',
  inputName: InputName.Pseudo,
  errors: {},
};

export const withError = Template.bind({});
withError.args = {
  type: InputType.Text,
  placeholder: 'Placeholder',
  inputName: InputName.Pseudo,
  errors: {
    pseudo: { message: "Message d'erreur pseudo" },
    password: { message: "Message d'erreur password" },
  },
};
