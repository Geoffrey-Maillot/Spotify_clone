import { useEffect, useState } from 'react';

// Import Router
import { NavLink as BaseLink, useLocation } from 'react-router-dom';

// Import component
import H2 from '../Typo/H2/H2';

interface Props {
  to: string;
  label?: string;
  children?: string;
  color?: 'white' | 'gray' | 'lightGray' | 'veryLightGray' | 'blue';
}

const NavLink = ({ to, label, children, color }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    path === to ? setIsActive(true) : setIsActive(false);
  }, [path, to]);
  return (
    <BaseLink
      to={to}
      className={`px-4 py-4  block rounded w-full ${
        isActive ? 'bg-dark-350' : 'bg-transparant'
      }`}
    >
      <H2 size="sm" color={color && isActive ? color : 'white'} label={label}>
        {children}
      </H2>
    </BaseLink>
  );
};

export default NavLink;
