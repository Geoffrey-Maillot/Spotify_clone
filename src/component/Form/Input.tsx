import { forwardRef } from 'react';

// Import Component
import { Inputs } from './Form';

// Interface
export enum InputType {
  Text = 'text',
  Password = 'password',
}

export enum InputName {
  Pseudo = 'pseudo',
  Password = 'password',
}

interface Props extends React.ComponentPropsWithRef<'input'> {
  errors?: any;
  inputName: InputName;
}

// == component =>
const Input = forwardRef<HTMLInputElement, Props>(
  ({ errors, inputName, ...props }, ref) => {
    const error: boolean = errors && !!errors[inputName];
    const errorMessage =
      errors && (errors[inputName]?.message as string | undefined);

    return (
      <>
        <input
          ref={ref}
          autoComplete="true"
          className={`pl-3 border max-w-[28.125rem] w-full border-dark-400 h-[3.25rem] rounded ${
            error && 'border-2 border-[#e91429]'
          }`}
          {...props}
        />
        {error && (
          <p className="font-circularBook text-[#e91429]">{errorMessage}</p>
        )}
      </>
    );
  }
);

export default Input;
