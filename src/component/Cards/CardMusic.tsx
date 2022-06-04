// Import Router
import { Link } from 'react-router-dom';

// Import component
import H2 from '../H2/H2';
import ButtonPlay from '../ButtonPlay/ButtonPlay';
import Paragraph from '../Paragraph/Paragraph';

interface Props {
  img?: string;
  title?: string;
  content?: string; //? Le contenu sera peu être sous forme d'objet quand les datas viendront de l'api
}

const CardMusic = ({
  img = 'https://source.unsplash.com/random/301x301',
  title = 'Daily Mix 1',
  content = 'Mes super titres',
}: Props) => {
  return (
    <Link
      to="#"
      className="max-w-xs block rounded-md p-5 bg-white/5 hover:bg-white/20 text-left group transition ease-in-out duration-300"
    >
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <span className="absolute right-3 bottom-0 opacity-0   group-hover:opacity-100 group-hover:-translate-y-3 transition ease-in-out duration-300">
          <ButtonPlay />
        </span>
        <img src={img} alt="Temp " />
      </div>
      <span className="block mt-4 mb-1  ">
        <H2 label={title} size="lg" color="white" />
      </span>
      <span className="  block">
        <Paragraph label={content} />
      </span>
    </Link>
  );
};

export default CardMusic;
