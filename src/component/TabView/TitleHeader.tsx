import { memo } from 'react';

// Import Icon
import { RiArrowDownSFill } from 'react-icons/ri';

interface Props {
  title: string;
  isActive?: boolean;
  isMenu?: boolean;
  isOpen?: boolean;
}

const TitleHeader = memo(
  ({ isActive = false, title, isMenu, isOpen }: Props) => {
    const classNameState = isActive
      ? 'bg-white text-dark-400'
      : 'bg-[#232323] hover:bg-[#2a2a2a] active:bg-[#1b1b1b] text-white';

    return (
      <div
        className={`px-3 py-2 rounded-full text-sm font-circularBook w-max flex items-center ${classNameState}`}
      >
        {title}
        {isMenu && (
          <RiArrowDownSFill
            color="#000"
            size="1.1rem"
            className={`${isOpen && 'rotate-180'} ml-2`}
          />
        )}
      </div>
    );
  }
);

export default TitleHeader;
