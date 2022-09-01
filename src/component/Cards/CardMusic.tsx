// Import Router
import { Link } from 'react-router-dom';

// Import component
import H2 from '../Typo/H2/H2';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';
import Paragraph from '../Typo/Paragraph/Paragraph';

interface Props extends SpotifyApi.PlaylistObjectSimplified {
  images: Array<any>;
  name: string;
  description: string | null;
  type: 'playlist';
  id: string;
}

const CardMusic = ({
  images = [],
  name = 'Daily Mix 1',
  description = 'Mes super titres',
  type = 'playlist',
  id = 'id12345',
}: Props) => {
  return (
    <Link
      to={`/${type}/${id}`}
      className="w-full max-w-xs block rounded-md p-5 bg-white/5 hover:bg-white/20 text-left group transition ease-in-out duration-300  aspect-[0.72] "
    >
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <span className="absolute right-3 bottom-0 opacity-0   group-hover:opacity-100 group-hover:-translate-y-3 transition ease-in-out duration-300">
          <ButtonPlay />
        </span>
        {images.length > 0 ? (
          <img src={images[0].url} alt={name} loading="lazy" />
        ) : (
          <div className="w-full h-full bg-dark-350 rounded shadow-2xl flex justify-center items-center ">
            <svg
              role="img"
              height="64"
              width="64"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="fill-gray-250"
            >
              <path d="M7 3h14v15.167a3.5 3.5 0 11-3.5-3.5H19V5H9v13.167a3.5 3.5 0 11-3.5-3.5H7V3zm0 13.667H5.5a1.5 1.5 0 101.5 1.5v-1.5zm12 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path>
            </svg>
          </div>
        )}
      </div>
      <span className="block mt-4 mb-1  ">
        <H2 label={name} size="lg" color="white" />
      </span>
      <span className="block">
        <Paragraph label={description} clamp />
      </span>
    </Link>
  );
};

export default CardMusic;
