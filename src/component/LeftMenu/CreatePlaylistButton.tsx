import { useState } from 'react';

import H2 from '../Typo/H2/H2';

// Import icon
import { AiOutlinePlus } from 'react-icons/ai';

const MenuLink = () => {
  const [isHover, setIsHover] = useState(false);

  const handlerOnMouseEnter = () => {
    setIsHover(() => true);
  };
  const handlerOnMouseLeave = () => {
    setIsHover(() => false);
  };

  // Component =>
  return (
    <button
      className=""
      onMouseEnter={handlerOnMouseEnter}
      onMouseLeave={handlerOnMouseLeave}
    >
      <span
        className={`h-7 w-7 rounded inline-flex justify-center items-center mr-4 ${
          isHover ? 'bg-white' : 'bg-gray-100'
        }`}
      >
        <AiOutlinePlus size="1rem" />
      </span>
      <span className="inline-block">
        <H2
          label=" Créer une playlist"
          size="sm"
          color={isHover ? 'white' : 'lightGray'}
        />
      </span>
    </button>
  );
};

export default MenuLink;
