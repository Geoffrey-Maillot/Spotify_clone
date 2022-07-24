interface Props {
  type: string;
  placeholder: string;
  error?: boolean;
  forwardRef: React.Ref<HTMLInputElement>;
}

const Input = ({ type, placeholder, error, forwardRef }: Props) => (
  <input
    autoComplete="true"
    ref={forwardRef}
    className={`pl-3 border  w-[18.75rem] sm:w-[28.125rem] border-dark-400 h-[3.25rem] rounded ${
      error && 'border-2 border-[#e91429]'
    }`}
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
