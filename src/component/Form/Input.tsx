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
}

const Input = ({ type, placeholder, errors, inputName, ...props }: Props) => {

  console.log(props)
  const error: boolean = !!errors[inputName];
  const errorMessage = errors[inputName]?.message as string | undefined;

  return (
    <>
      <input
        autoComplete="true"
        className={`pl-3 border max-w-[28.125rem] w-full border-dark-400 h-[3.25rem] rounded ${
          error && 'border-2 border-[#e91429]'
        }`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="font-circularBook text-[#e91429]">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
