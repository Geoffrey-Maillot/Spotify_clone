// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';

// Import Icon
import { GoPrimitiveDot } from 'react-icons/go';
import ButtonPlayLight from '../Button/ButtonPlay/ButtonPlayLight';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

interface Track {
  title: string;
  artist: string;
  duration: string;
  liked: boolean;
}

interface Props {
  img: string;
  title: string;
  type: string;
  year: string;
  liked: boolean;
  trackList: Array<Track>;
}

const DiscographyAlbum = ({
  img,
  title,
  type,
  year,
  liked,
  trackList,
}: Props) => {
  const nbrTrack = trackList.length;

  return (
    <div className="p-8 flex justify-start items-start gap-6">
      <div className="w-[8.5rem] h-[8.5rem] ">
        <img className="object-cover object-center" src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-between items-start ">
        <div>
          <H2 label={title} size="xl2" />
          <div className="flex items-center justify-start gap-1">
            <Paragraph label={type} />
            <GoPrimitiveDot size=".5rem" color="#b3b3b3" />
            <Paragraph label={year} />
            <GoPrimitiveDot size=".5rem" color="#b3b3b3" />
            <Paragraph label={`${nbrTrack} titre${nbrTrack > 1 && 's'}`} />
          </div>
          <div className="flex items-center justify-start gap-3">
            <ButtonPlayLight />
            {liked ? (
              <AiFillHeart
                color="#1ed760"
                className=" buttonLike liked"
                size="1.7rem"
              />
            ) : (
              <AiOutlineHeart
                className="buttonLike text-lightGray hover:text-white"
                size="1.7rem"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscographyAlbum;
