import { useState, useEffect } from 'react';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// Import PrimeReact
import { DataTable, DataTableResponsiveLayoutType } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Paragraph from '../Typo/Paragraph/Paragraph';

// TODO : Remplacer any par les infos provenant de l'api

interface Track {
  track: number;
  img: string;
  title: string;
  artist: string;
  album: string;
  added: number;
  duration: string;
  liked: boolean;
}

interface Props {
  tracksList: Array<Track>;
}

const TableTracks = ({ tracksList }: Props) => {
  const [selectedRow, setSelectedRow] = useState<Track | null>(null);
  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');
  const windowWidth: number = useGetWindowWidth();

  useEffect(() => {
    const responsiveStyle = windowWidth <= 780 ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [windowWidth]);

  const onSelectRow = (e: any) => {
    setSelectedRow(e.value);
  };

  const buttonLike = (rowData: any) => {
    return (
      <span className="w-full flex justify-end">
        {rowData.liked ? (
          <AiFillHeart
            color="#1ed760"
            className=" buttonLike liked"
            size="1.2rem"
          />
        ) : (
          <AiOutlineHeart
            className="buttonLike text-lightGray hover:text-white"
            size="1.2rem"
          />
        )}
      </span>
    );
  };
  // TODO : Afficher la date si moins de 7 jours sison "Il y a x jours "
  const addedContent = (rowData: any) => {
    return <p> Il y a {rowData?.added} jours</p>;
  };

  const titleContent = (rowData: any) => {
    return (
      <div className="flex justify-start flex-row-reverse md:flex-row items-center text-right md:text-left gap-3">
        <div className="w-10 h-10 object-cover object-center">
          <img src={rowData?.img} alt={rowData?.title} />
        </div>
        <div className="overflow-hidden title">
          <Paragraph size="lg" color="white" label={rowData?.title} />
          <Paragraph size="sm" color="lightGray" label={rowData?.artist} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <DataTable
        value={tracksList}
        dataKey="track"
        selectionMode="single"
        responsiveLayout={responsiveTableStyle}
        breakpoint="780px"
        className=" text-gray-200 text-left table-tracks"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
      >
        <Column
          headerStyle={{
            width: '5%',
            minWidth: '60px',
            textAlign: 'center',
            padding: '8px 0',
            marginBottom: '32px',
            fontSize: '1rem',
          }}
          bodyStyle={{ textAlign: 'center', fontSize: '1rem' }}
          field="track"
          header="#"
        />
        <Column
          field="title"
          bodyStyle={{ width: '30%', padding: '8px 0' }}
          header="Titre"
          body={titleContent}
        />

        <Column
          field="album"
          bodyStyle={{ width: '20%', minWidth: '100px' }}
          header="Album"
          className="album"
        />

        <Column
          field="added"
          bodyStyle={{ width: '20%' }}
          header="Ajoutée le"
          body={addedContent}
          className="hidden lg:table-cell"
        />

        <Column
          field=""
          header=""
          bodyStyle={{ width: '60px', textAlign: 'end' }}
          body={buttonLike}
        />
        <Column
          headerStyle={{
            width: '10%',
            maxWidth: '100px',
            paddingRight: '16px',
            textAlign: 'end',
          }}
          field="duration"
          bodyStyle={{
            textAlign: 'end',
            paddingRight: '16px',
          }}
          header={
            <div className="text-end">
              <AiOutlineClockCircle size="1.2rem" />
            </div>
          }
        />
      </DataTable>
    </div>
  );
};

export default TableTracks;
