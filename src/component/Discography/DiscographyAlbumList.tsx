// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';

// Import Icon
import { GoPrimitiveDot } from 'react-icons/go';
import ButtonPlayLight from '../Button/ButtonPlay/ButtonPlayLight';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import TableDiscography from '../Tables/TableDiscography';

interface Track {
  track: number;
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
  tracksList: Array<Track>;
}

// == Component =>
const DiscographyAlbumList = ({
  img,
  title,
  type,
  year,
  liked,
  tracksList,
}: Props) => {
  const nbrTrack = tracksList.length;

  return (
    <article className="pb-6 bg-gradient-to-b from-dark-50 to-dark-100 pt-[3.5rem]">
      <div className="p-8 flex justify-start items-start flex-col sm:flex-row gap-6 ">
        <div className="w-[8.5rem] h-[8.5rem] ">
          <img className="object-cover object-center" src={img} alt={title} />
        </div>
        <div className="flex flex-col justify-between items-start h-full gap-2 ">
          <div>
            <H2 label={title} size="xl3" />
            <div className="flex items-center justify-start gap-1 mt-2">
              <Paragraph label={type} />
              <GoPrimitiveDot size=".5rem" color="#b3b3b3" />
              <Paragraph label={year} />
              <GoPrimitiveDot size=".5rem" color="#b3b3b3" />
              <Paragraph
                label={`${nbrTrack} titre${nbrTrack > 1 ? 's' : ''}`}
              />
            </div>
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
                className="buttonLike text-gray-200 hover:text-white"
                size="1.7rem"
              />
            )}
          </div>
        </div>
      </div>
      <TableDiscography tracksList={tracksList} />
    </article>
  );
};

export default DiscographyAlbumList;
