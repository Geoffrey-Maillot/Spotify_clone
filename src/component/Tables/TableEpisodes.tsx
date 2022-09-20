import { useState, useEffect } from 'react';

// Import Router
import { Link } from 'react-router-dom';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// Utils
import { milisecondToMinOrHour } from '../../service/utils/time';

// Import PrimeReact
import { DataTable, DataTableResponsiveLayoutType } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Component
import H2 from '../../component/Typo/H2/H2';
import Paragraph from '../../component/Typo/Paragraph/Paragraph';

// Import Icon
import { GoPrimitiveDot } from 'react-icons/go';
import { MdOutlineIosShare } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { BsCheckLg } from 'react-icons/bs';
import ButtonPlayLight from '../Button/ButtonPlay/ButtonPlayLight';

interface Props {
  episodesList: any;
  episodesAreLikedOrNot?: {
    id: string;
    liked: boolean | undefined;
  }[];
}

const TableEpisodes = ({ episodesList, episodesAreLikedOrNot }: Props) => {
  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');
  const windowWidth: number = useGetWindowWidth();

  useEffect(() => {
    const responsiveStyle = windowWidth <= 780 ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [windowWidth]);

  const TableEpisodesContent = (
    rowData: SpotifyApi.EpisodeObjectSimplified
  ) => {
    const episodeIdIsLikedOrNot = episodesAreLikedOrNot?.find(
      (episode) => episode.id === rowData.id
    );

    return (
      <Link
        to={`/episode/${rowData.id}`}
        className="link p-4 flex items-start justify-start flex-col sm:flex-row gap-4 sm:gap-8 group"
      >
        <div className="sm:w-[7.375rem] sm:h-[7.375rem] w-[5.125rem] h-[5.125rem] flex-none">
          <img
            className="object-cover object-center rounded-lg"
            src={rowData.images[0].url}
            alt={rowData.name}
          />
        </div>
        <div className="flex flex-col gap-4 justify-start items-start">
          <H2 label={rowData.name} size="lg" />
          <Paragraph clamp label={rowData.description} />
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div className="flex items-center justify-start gap-6 ">
              <ButtonPlayLight />
              <span className="flex items-center justify-start gap-1">
                <Paragraph label={rowData.release_date} />
                <GoPrimitiveDot size={'.4rem'} />
                <Paragraph label={milisecondToMinOrHour(rowData.duration_ms)} />
              </span>
            </div>
            <div className="flex items justify-start gap-6">
              <button className="opacity-100 lg:opacity-0 group-hover:opacity-100 cursor-default">
                <MdOutlineIosShare size="1.5rem" className="hover:text-white" />
              </button>
              {episodeIdIsLikedOrNot?.liked ? (
                <button className="bg-green-200 rounded-full w-[1.375rem] h-[1.375rem] flex items-center justify-center cursor-default">
                  <BsCheckLg color="#000" size=".8rem" />
                </button>
              ) : (
                <button className="opacity-100 lg:opacity-0 group-hover:opacity-100 cursor-default">
                  <IoAddCircleOutline
                    className="hover:text-white"
                    size="1.5rem"
                  />
                </button>
              )}

              <button className="opacity-100 lg:opacity-0 group-hover:opacity-100 cursor-default">
                {' '}
                <IoEllipsisHorizontalSharp
                  size="1.5rem"
                  className="hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <DataTable
        value={episodesList}
        dataKey="track"
        selectionMode="single"
        responsiveLayout="scroll"
        className=" text-gray-200 text-left table-podcasts "
        emptyMessage="Vous n'avez pas encore d'épisodes"
      >
        <Column
          header="Tous les épidodes"
          headerClassName="text-2xl text-white py-4"
          headerStyle={{ justifyContent: 'start' }}
          body={TableEpisodesContent}
        />
      </DataTable>
    </div>
  );
};

export default TableEpisodes;
