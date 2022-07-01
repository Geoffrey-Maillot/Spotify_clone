// Import Router
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  img: string;
  alt: string;
  color: string;
  size: string;
  id?: string;
}

// == Component =>
const CardGender = ({
  title = 'Titre',
  img = 'https://source.unsplash.com/random/201x201',
  alt = 'Image Alt',
  color = '#7695c9',
  size = 'small',
  id='id12345'
}: Props) => {
  const spanSizes: { [x: string]: string } = {
    small: 'col-span-1',
    large: 'col-span-2',
  };

  const fontSizes: { [x: string]: string } = {
    small: 'text-2xl',
    large: 'text-5xl',
  };

  const imgSize: { [x: string]: string } = {
    small: 'w-[6rem] h-[6rem]',
    large: 'w-[8rem] h-[8rem]',
  };

  return (
    <Link
      to={`/genrepage/${id}`}
      className={`${
        spanSizes[size]
      } block relative rounded-lg overflow-hidden place-self-stretch h-full ${
        size === 'small' && 'aspect-square'
      }`}
      /* Tailwind ne peu pas appliquer une classe si il ne connait pas la valeur, je passe donc par l'attribut style dans ce cas la */
      style={{ backgroundColor: color }}
    >
      <h2
        className={`${fontSizes[size]} text-white tracking-tighter font-circularBold p-4`}
      >
        {title}
      </h2>

      <div
        className={` ${imgSize[size]} ${imgSize[size]} absolute right-0 bottom-0 rotate-[22deg] translate-x-[16%] translate-y-[2%] shadow-md`}
      >
        <img
          className="object-cover object-center w-full"
          src={img}
          alt={alt}
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default CardGender;
