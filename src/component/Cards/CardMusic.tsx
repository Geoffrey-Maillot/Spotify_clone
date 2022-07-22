// Import Router
import { Link } from 'react-router-dom';

// Import component
import H2 from '../Typo/H2/H2';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';
import Paragraph from '../Typo/Paragraph/Paragraph';
import RenderIf from '../UtilsComponents/RenderIf';

// Import Icon
import { GoPrimitiveDot } from 'react-icons/go';

interface Props {
  img?: string;
  title?: string;
  content?: string; //? Le contenu sera peu être sous forme d'objet quand les datas viendront de l'api
  type?: 'artist' | 'show' | 'playlist' | 'episode' | 'user';
  id?: string;
  date?: string;
  duration?: string;
}

const CardMusic = ({
  img = 'https://source.unsplash.com/random/301x301',
  title = 'Daily Mix 1',
  content = 'Mes super titres',
  type = 'playlist',
  id = 'id12345',
  date,
  duration,
}: Props) => {
  return (
    <Link
      to={`/${type}/${id}`}
      className="max-w-xs block rounded-md p-5 bg-white/5 hover:bg-white/20 text-left group transition ease-in-out duration-300  aspect-[0.72]"
    >
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <RenderIf bool={type === 'playlist'}>
          <span className="absolute right-3 bottom-0 opacity-0   group-hover:opacity-100 group-hover:-translate-y-3 transition ease-in-out duration-300">
            <ButtonPlay />
          </span>
        </RenderIf>
        <img
          src={img}
          alt="Temp "
          className={`${type === 'artist' && 'rounded-full'}`}
        />
      </div>
      <span className="block mt-4 mb-1  ">
        <H2 label={title} size="lg" color="white" />
      </span>
      <span className="block">
        {type === 'episode' ? (
          <div className="flex items-center justify-start gap-1">
            <Paragraph label={date} />
            <GoPrimitiveDot color="#b3b3b3" size=".4rem" />
            <Paragraph label={duration} />
          </div>
        ) : (
          <Paragraph label={content} />
        )}
      </span>
    </Link>
  );
};

export default CardMusic;
