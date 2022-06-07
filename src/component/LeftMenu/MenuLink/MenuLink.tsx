import { useState, useEffect } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

import H2 from '../../Typo/H2/H2';

// Import icon
import { RiSearchFill } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { RiHome4Fill } from 'react-icons/ri';
import { RiHome4Line } from 'react-icons/ri';
import { RiBarChart2Fill } from 'react-icons/ri';
import { RiBarChart2Line } from 'react-icons/ri';

interface Props {
  icon?: boolean;
  iconType?: 'home' | 'search' | 'library';
  label?: string;
  children?: string;
  to: string;
}

const MenuLink = ({
  icon = false,
  iconType = 'home',
  label = 'Nav link',
  children,
  to = '/',
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const match = useMatch(to);
  const iconFil: 'Fill' | 'Line' = isActive || isHover ? 'Fill' : 'Line';
  const iconSize = '1.5rem';
  const iconColor = isActive || isHover ? '#fff' : '#b3b3b3';

  const handlerOnMouseEnter = () => {
    setIsHover(() => true);
  };
  const handlerOnMouseLeave = () => {
    setIsHover(() => false);
  };

  const icons = {
    searchLine: <RiSearchLine size={iconSize} color={iconColor} />,
    searchFill: <RiSearchFill size={iconSize} color={iconColor} />,
    homeLine: <RiHome4Line size={iconSize} color={iconColor} />,
    homeFill: <RiHome4Fill size={iconSize} color={iconColor} />,
    libraryFill: <RiBarChart2Fill size={iconSize} color={iconColor} />,
    libraryLine: <RiBarChart2Line size={iconSize} color={iconColor} />,
  };

  useEffect(() => {
    if (match) {
      setIsActive(true);
    }
  }, [match]);

  // Component =>
  return (
    <NavLink
      to={to}
      className="flex items-center justify-start gap-4 hover:text-white my-5"
      onMouseEnter={handlerOnMouseEnter}
      onMouseLeave={handlerOnMouseLeave}
    >
      {icon && <span>{icons[`${iconType}${iconFil}`]}</span>}
      {label ? (
        <H2
          label={label}
          size="sm"
          color={isActive || isHover ? 'white' : 'lightGray'}
        />
      ) : (
        <H2
          label={label}
          size="sm"
          color={isActive || isHover ? 'white' : 'lightGray'}
        >
          {children}
        </H2>
      )}
    </NavLink>
  );
};

export default MenuLink;
