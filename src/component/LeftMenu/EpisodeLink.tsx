import { useState, useEffect } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

import { BsBookmarkFill } from 'react-icons/bs';
import H2 from '../Typo/H2/H2';

interface Props {
  to: string;
}

const EpisodeLink = ({ to = '/' }: Props) => {
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

  const bgColor =
    isActive || isHover
      ? 'bg-green-600'
      : 'bg-green-500';

  // Component =>
  return (
    <NavLink
      to={to}
      className="flex items-center justify-start gap-4 hover:text-white my-5"
      onMouseEnter={handlerOnMouseEnter}
      onMouseLeave={handlerOnMouseLeave}
    >
      <span
        className={`h-6 w-6 rounded inline-flex justify-center items-center ${bgColor} `}
      >
        <BsBookmarkFill
          size=".9rem"
          color={isActive || isHover ? '#1ed760' : '#159643'}
        />
      </span>

      <H2
        label="Vos épisodes"
        size="sm"
        color={isActive || isHover ? 'white' : 'veryLightGray'}
      />
    </NavLink>
  );
};

export default EpisodeLink;
