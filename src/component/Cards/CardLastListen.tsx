import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import H2 from '../Typo/H2/H2';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';

interface Props {
  img?: string;
  title?: string;
}

const CardLastListen = ({
  img = 'https://source.unsplash.com/random/101x101',
  title = 'Dernières playlist écoutée',
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const cardLink = useRef<HTMLAnchorElement | null>(null);

  const setButtonIsVisible = () => {
    if (cardLink.current) {
      cardLink?.current?.clientWidth > 270
        ? setIsVisible(true)
        : setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setButtonIsVisible);
    return window.removeEventListener('resize', setButtonIsVisible);
  }, []);

  return (
    <Link
      ref={cardLink}
      to="#"
      className="flex items-center justify-start bg-white/10 hover:bg-white/20 gap-4 pr-4 group transition-all rounded-md drop-shadow"
    >
      <div className="h-16 w-16 lg:w-20 lg:h-20 shrink-0 object-cover">
        <img src={img} alt="Temp " />
      </div>
      <H2 label={title} size="lg" color="white" />
      <span
        className={`ml-auto transition-all  ${
          !isVisible && 'hidden'
        } invisible ${isVisible && 'block group-hover:visible'}`}
      >
        <ButtonPlay />
      </span>
    </Link>
  );
};

export default CardLastListen;
