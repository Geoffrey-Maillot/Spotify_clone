import { UUID } from '../../service/utils/uuid';

// Import Router
import { Link } from 'react-router-dom';

// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';

export enum Type {
  PLAYLIST = 'playlist',
  PODCAST = 'podcast',
}

interface Props {
  type: Type;
  listTitleTracks?: Array<{ track: string; artist: string }>;
  listTitleEpisodes?: Array<string>;
  total?: number;
}

const CardFirst = ({
  type,
  listTitleTracks,
  listTitleEpisodes,
  total,
}: Props) => {
  const types: { [x: string]: Record<string, string> } = {
    playlist: {
      title: total && total > 0 ? 'Titres likés' : 'Titre liké',
      subTitle: total && total > 0 ? 'titres likés' : 'titre liké',
      background: 'bg-gradient-to-tl from-[#8c8be5] to-[#460cf4]',
    },
    podcast: {
      title: 'Vos épisode',
      subTitle: total && total > 0 ? 'épisodes' : 'épisode',
      background: 'bg-gradient-to-tl from-[#268469] to-[#00644e]',
    },
  };

  return (
    <Link
      to={`/collection/${type === Type.PLAYLIST ? 'tracks' : 'episodes'}`}
      className={` h-full relative group col-span-1 md:col-span-2 self-stretch rounded-md flex flex-col gap-6 justify-end items-start p-[20px] place-self-stretch ${types[type].background}`}
    >
      {(listTitleTracks || listTitleEpisodes) && (
        <div className="mb-3 flex items-center content-start flex-wrap">
          <p className="line-clamp" style={{ WebkitLineClamp: 3 }}>
            {listTitleTracks &&
              listTitleTracks.length > 0 &&
              listTitleTracks.map((track) => (
                <span key={UUID()}>
                  <span className="text-lg font-circularBook text-white mx-1">
                    {track.artist}
                  </span>
                  <span className="text-lg font-circularBook text-white/70 mx-1">
                    {track.track}
                  </span>
                  <span className="w-1 h-1 rounded-full -translate-y-[2px] bg-white/70 mx-1 inline-block"></span>
                </span>
              ))}
            {listTitleEpisodes &&
              listTitleEpisodes.length > 0 &&
              listTitleEpisodes.map((name) => (
                <span key={UUID()}>
                  <span className="text-lg font-circularBook text-white mx-1">
                    {name}
                  </span>

                  <span className="w-1 h-1 rounded-full -translate-y-[2px] bg-white/70 mx-1 inline-block"></span>
                </span>
              ))}
          </p>
        </div>
      )}
      <div>
        <span className="mb-1 block">
          <H2 size="xl3" label={`${types[type].title} `} />
        </span>
        <Paragraph
          size="lg"
          color="white"
          label={`${total ? total : '0'} ${types[type].subTitle}`}
        />
      </div>
      <span className="absolute right-5 bottom-4 opacity-0   group-hover:opacity-100 group-hover:-translate-y-5 transition ease-in-out duration-280">
        <ButtonPlay />
      </span>
    </Link>
  );
};

export default CardFirst;
