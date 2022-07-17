import { useRef } from 'react';

// Import Style
import './ButtonHambergerMenu.scss';

interface Props {
  togglePanelLeft: () => void;
}

// == Component =>
const ButtonHamberMenu = ({ togglePanelLeft }: Props) => {
  const buttonHamburger = useRef<HTMLButtonElement>(null);

  const toggleClassName = () => {
    const isActive = buttonHamburger.current?.classList.contains('active');
    const isNotActive =
      buttonHamburger.current?.classList.contains('not-active');

    if (!isActive && !isNotActive) {
      buttonHamburger.current?.classList.add('active');
    } else {
      buttonHamburger.current?.classList.toggle('not-active');
      buttonHamburger.current?.classList.toggle('active');
    }
  };

  const handlerOnclick = () => {
    togglePanelLeft();
    toggleClassName();
  };

  return (
    <button
      ref={buttonHamburger}
      onClick={handlerOnclick}
      className=" hamburger relative w-10 p-2"
    >
      <span className="line block h-full rounded h-1 bg-white transition relative"></span>
      <span className="line block h-full rounded h-1 bg-white transition relative mt-1"></span>
      <span className="line block h-full rounded h-1 bg-white transition relative mt-1"></span>
    </button>
  );
};

export default ButtonHamberMenu;
