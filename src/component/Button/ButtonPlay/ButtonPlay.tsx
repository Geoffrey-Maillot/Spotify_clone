// Import Icon
import { GrPlayFill } from 'react-icons/gr';

interface Props {
  size?: 'small' | 'large';
}

// == Component =>
const ButtonPlay = ({ size = 'small' }: Props) => {
  const sizes: { [x: string]: string } = {
    small: 'w-[3.125rem] h-[3.125rem] ',
    large: 'sm:w-[3.5rem] h-[3.5rem] ',
  };

  // Return =>
  return (
    <button
      className={` ${sizes[size]} border-none drop-shadow-xl rounded-full bg-green-200 hover:bg-green-100 w-[3.125rem] h-[3.125rem] hover:scale-110  flex justify-center items-center active:bg-green-300`}
    >
      <GrPlayFill
        className="translate-x-0.5"
        size={size === 'large' ? '1.3rem' : ''}
        color="#000"
      />
    </button>
  );
};

export default ButtonPlay;
