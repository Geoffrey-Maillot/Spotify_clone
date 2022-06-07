import { GrPlayFill } from 'react-icons/gr';

interface Props {
  size?: 'small' | 'large';
}

const ButtonPlay = ({ size = 'small' }: Props) => {
  const sizes: { [x: string]: string } = {
    small: 'w-[3.125rem] h-[3.125rem] hover:w-[3.25rem] hover:h-[3.25rem]',
    large: 'w-[3.5rem] h-[3.5rem] hover:w-[3.75rem] hover:h-[3.75rem]',
  };

  return (
    <button
      className={` ${sizes[size]} border-none drop-shadow-xl rounded-full bg-green-200 hover:bg-green-100   flex justify-center items-center active:bg-green-300`}
    >
      <GrPlayFill color="#000" />
    </button>
  );
};

export default ButtonPlay;
