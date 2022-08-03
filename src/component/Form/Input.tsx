import { useFormContext } from 'react-hook-form';

interface Props {
  type: string;
  placeholder: string;
  name: string;
}

const Input = ({ type, placeholder, name }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: boolean = !!errors[name];
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <>
      <input
        autoComplete="true"
        className={`pl-3 border max-w-[28.125rem] w-full border-dark-400 h-[3.25rem] rounded ${
          error && 'border-2 border-[#e91429]'
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <p className="font-circularBook text-[#e91429]">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
