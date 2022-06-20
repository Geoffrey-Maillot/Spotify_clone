// Import Router
import { Link } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';

// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';

interface Props {
  type: 'playlist' | 'podcast';
  listTitle?: [];
  colSpan?: number;
}

const CardFirst = ({ type = 'playlist', listTitle, colSpan = 2 }: Props) => {
  const total: number = 418;
  const types: { [x: string]: { [x: string]: string } } = {
    playlist: {
      title: total > 0 ? 'Titres likés' : 'Titre liké',
      subTitle: total > 0 ? 'titres likés' : 'titre liké',
      background: 'bg-gradient-to-tl from-[#8c8be5] to-[#460cf4]',
    },
    podcast: {
      title: 'Vos épisode',
      subTitle: total > 0 ? 'épisodes' : 'épisode',
      background: 'bg-gradient-to-tl from-[#268469] to-[#00644e]',
    },
  };

  return (
    <Link
      to="#"
      className={` relative group col-span-1 md:col-span-2 self-stretch rounded-md flex flex-col gap-6 justify-end items-start p-[20px] place-self-stretch ${types[type].background}`}
    >
      {listTitle && (
        <div className="mb-3 flex items-center content-start flex-wrap">
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label="Soom T" />
          </span>
          <span className="mx-1">
            {' '}
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />{' '}
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label="Politic Man" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label=" Stress Out" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label="Dadju" />{' '}
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label=" Burna Boy" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label=" Gentleman" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label="Roiusseau" />{' '}
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label=" Carnival" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label="Osocity" />{' '}
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
          <span>
            {' '}
            <Paragraph color="mediumGray" size="lg" label=" Bob Marley" />
          </span>
          <span className="mx-1">
            <GoPrimitiveDot color="#c2b3f9" size=".7em" />
          </span>
        </div>
      )}
      <div>
        <span className="mb-1 block">
          <H2 size="xl3" label={`${types[type].title} `} />
        </span>
        <Paragraph
          size="lg"
          color="white"
          label={`${total} ${types[type].subTitle}`}
        />
      </div>
      <span className="absolute right-5 bottom-4 opacity-0   group-hover:opacity-100 group-hover:-translate-y-5 transition ease-in-out duration-280">
        <ButtonPlay />
      </span>
    </Link>
  );
};

export default CardFirst;
