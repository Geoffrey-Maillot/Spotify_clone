import { useEffect, useState } from 'react';

// Import Router
import { NavLink as BaseLink, useLocation } from 'react-router-dom';

// Import component
import H2 from '../Typo/H2/H2';

interface Props {
  to: string;
  label?: string;
  children?: string;
}

const NavLink = ({ to, label, children }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    path === to ? setIsActive(true) : setIsActive(false);
  }, [path, to]);
  console.log(isActive, label);
  return (
    <BaseLink
      to={to}
      className={`px-4 py-4  block rounded ${
        isActive ? 'bg-white/10' : 'bg-transparant'
      }`}
    >
      <H2 size="sm" color="white" label={label}>
        {children}
      </H2>
    </BaseLink>
  );
};

export default NavLink;
