import { useState, useEffect } from 'react';
import { NavLink, useMatch, Route } from 'react-router-dom';

import H2 from '../H2/H2';

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
  const match = useMatch(to);
  const iconFil: 'Fill' | 'Line' = isActive ? 'Fill' : 'Line';
  const iconSize = '1.5rem';
  const iconColor = isActive ? '#fff' : '#b3b3b3';

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
    <NavLink to={to} className="flex items-center justify-start gap-4">
      {icon && <span>{icons[`${iconType}${iconFil}`]}</span>}
      {label ? (
        <H2 label={label} size="sm" color={isActive ? 'white' : 'lightGray'} />
      ) : (
        <H2 label={label} size="sm" color={isActive ? 'white' : 'lightGray'}>
          {children}
        </H2>
      )}
    </NavLink>
  );
};

export default MenuLink;
