// Import Router
import { NavLink as BaseLink } from 'react-router-dom';

// Import component
import H2 from '../../Typo/H2/H2';

interface Props {
  to: string;
  label?: string;
  children: string;
}

const NavLink = ({ to, label, children }: Props) => {
  return (
    <BaseLink
      to={to}
      className={` p-4 {({isActive}) => isActive ? 'bg-white/10' : 'bg-transparant'}`}
    >
      <H2 size="sm" color="white" label={label}>
        {children}
      </H2>
    </BaseLink>
  );
};

export default NavLink;
