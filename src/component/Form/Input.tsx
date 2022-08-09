import { UseFormRegister } from 'react-hook-form';

import { Inputs } from './Form';

export enum InputType {
  Text = 'text',
  Password = 'password',
}

export enum InputName {
  Pseudo = 'pseudo',
  Password = 'password',
}

interface Props {
  type: InputType;
  placeholder: string;
  errors?: any;
  inputName: InputName;
  register: UseFormRegister<Inputs>;
}

const Input = ({ type, placeholder, errors, inputName, register }: Props) => {
  const error: boolean = errors && !!errors[inputName];
  const errorMessage =
    errors && (errors[inputName]?.message as string | undefined);

  return (
    <>
      <input
        autoComplete="true"
        className={`pl-3 border max-w-[28.125rem] w-full border-dark-400 h-[3.25rem] rounded ${
          error && 'border-2 border-[#e91429]'
        }`}
        type={type}
        placeholder={placeholder}
        {...register(inputName)}
      />
      {error && (
        <p className="font-circularBook text-[#e91429]">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
