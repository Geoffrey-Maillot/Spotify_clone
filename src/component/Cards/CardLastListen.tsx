import { useEffect, useRef, useState } from 'react';

// Import router
import { Link } from 'react-router-dom';

// Import Component
import H2 from '../Typo/H2/H2';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';

interface Props {
  img?: string;
  title?: string;
  id?: string;
}

// Component =>
const CardLastListen = ({
  img = 'https://source.unsplash.com/random/101x101',
  title = 'Dernières playlist écoutée',
  id = 'id12345',
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const cardLink = useRef<HTMLAnchorElement | null>(null);

  const setButtonIsVisible = () => {
    if (cardLink.current) {
      cardLink?.current?.clientWidth >= 295
        ? setIsVisible(true)
        : setIsVisible(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', setButtonIsVisible, true);
    }
    return window.removeEventListener('resize', setButtonIsVisible);
  }, []);

  return (
    <Link
      ref={cardLink}
      to={`playlist/${id}`}
      className="flex items-center justify-start bg-white/10 hover:bg-white/20 gap-4 pr-4 group transition-all rounded-md drop-shadow"
    >
      <div className=" h-10 w-10 sm:h-16 sm:w-16 lg:w-20 lg:h-20 shrink-0 object-cover">
        <img src={img} alt="Temp " />
      </div>
      <H2 label={title} size="lg" color="white" truncate />
      <span
        className={`ml-auto transition-all invisible 
       ${isVisible ? 'block group-hover:visible' : 'hidden'}`}
      >
        <ButtonPlay size="small" />
      </span>
    </Link>
  );
};

export default CardLastListen;
