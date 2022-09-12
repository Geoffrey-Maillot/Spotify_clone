import { useState, useEffect } from 'react';

// Import Router
import { Link } from 'react-router-dom';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

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

// TODO : Remplacer any par les infos provenant de l'api
interface Episode {
  img: string;
  title: string;
  content: string;
  date: string;
  duration: number;
  id: string;
  isSave: boolean;
}

interface Props {
  episodesList: Array<SpotifyApi.EpisodeObjectSimplified>;
}

const TableEpisodes = ({ episodesList }: Props) => {
  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');
  const windowWidth: number = useGetWindowWidth();

  useEffect(() => {
    const responsiveStyle = windowWidth <= 780 ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [windowWidth]);

  const TableEpisodesContent = (rowData: Episode) => {
    return (
      <Link
        to={`/episode/${rowData.id}`}
        className="link p-4 flex items-start justify-start flex-col sm:flex-row gap-4 sm:gap-8 group"
      >
        <div className="sm:w-[7.375rem] sm:h-[7.375rem] w-[5.125rem] h-[5.125rem] flex-none">
          <img
            className="object-cover object-center rounded-lg"
            src={rowData.img}
            alt={rowData.title}
          />
        </div>
        <div className="flex flex-col gap-4 justify-start items-start">
          <H2 label={rowData.title} size="lg" />
          <Paragraph clamp label={rowData.content} />
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div className="flex items-center justify-start gap-6 ">
              <ButtonPlayLight />
              <span className="flex items-center justify-start gap-1">
                <Paragraph label={rowData.date} />
                <GoPrimitiveDot size={'.4rem'} />
                <Paragraph label={rowData.duration + ' min'} />
              </span>
            </div>
            <div className="flex items justify-start gap-6">
              <button className="opacity-100 lg:opacity-0 group-hover:opacity-100 cursor-default">
                <MdOutlineIosShare size="1.5rem" className="hover:text-white" />
              </button>
              {rowData.isSave ? (
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
          body={TableEpisodesContent}
        />
      </DataTable>
    </div>
  );
};

export default TableEpisodes;
