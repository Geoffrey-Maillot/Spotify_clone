// Import Icon
import { GrPlayFill } from 'react-icons/gr';

const ButtonPlayLight = () => (
  <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center  transition hover:scale-105 active:bg-gray-200 active:scale-95">
    <GrPlayFill className="translate-x-0.5" />
  </button>
);

export default ButtonPlayLight;
