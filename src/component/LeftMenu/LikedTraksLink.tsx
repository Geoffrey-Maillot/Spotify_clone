import { useState, useEffect } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';
import H2 from '../Typo/H2/H2';

interface Props {
  to: string;
}

const LikedTraksLink = ({ to = '/' }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const match = useMatch(to);

  const handlerOnMouseEnter = () => {
    setIsHover(() => true);
  };
  const handlerOnMouseLeave = () => {
    setIsHover(() => false);
  };
  useEffect(() => {
    if (match) {
      setIsActive(true);
    }
  }, [match]);

  const bgGradient =
    isActive || isHover
      ? 'bg-gradient-to-tl from-[#BCE0DA] to-[#501DF3]'
      : 'bg-gradient-to-tl from-[#829A9A] to-[#3611AA]';

  // Component =>
  return (
    <NavLink
      to={to}
      className="flex items-center justify-start gap-4 hover:text-white my-5"
      onMouseEnter={handlerOnMouseEnter}
      onMouseLeave={handlerOnMouseLeave}
    >
      <span
        className={`h-7 w-7 rounded inline-flex justify-center items-center ${bgGradient} `}
      >
        <AiFillHeart
          size="1rem"
          color={isActive || isHover ? '#fff' : '#b2b2b2'}
        />
      </span>

      <H2
        label="Titreslikés"
        size="sm"
        color={isActive || isHover ? 'white' : 'veryLightGray'}
      />
    </NavLink>
  );
};

export default LikedTraksLink;
