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
        <div className="w-10 h-10 object-cover object-center flex-none">
          <img src={rowData?.img} alt={rowData?.title} />
        </div>
        <div className="title">
          <Paragraph
            size="lg"
            color="white"
            label={rowData?.title}
            clamp
            nbrLineClamp={1}
          />
          <Paragraph
            size="sm"
            color="lightGray"
            label={rowData?.artist}
            clamp
            nbrLineClamp={1}
          />
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
        className=" text-gray-200 text-left table-tracks"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
      >
        <Column
          headerStyle={{
            textAlign: 'center',
            padding: '8px 10px',
            marginBottom: '32px',
            fontSize: '1rem',
          }}
          bodyStyle={{
            textAlign: 'center',
            fontSize: '1rem',
            width: '60px',
            flex: 'none',
            paddingInline: '8px',
          }}
          field="track"
          header="#"
        />
        <Column
          field="title"
          bodyStyle={{ padding: '8px' }}
          header="Titre"
          body={titleContent}
        />

        <Column
          field="album"
          bodyStyle={{ flex: 'none', paddingInline: '8px' }}
          header="Album"
          className="album"
          body={(rowData: any) => (
            <Paragraph
              label={rowData.album}
              clamp
              nbrLineClamp={2}
              className="title"
            />
          )}
        />

        <Column
          field="added"
          bodyStyle={{ flex: 'none', paddingInline: '8px', minWidth: '100px' }}
          header="Ajoutée le"
          body={addedContent}
          className="hidden lg:table-cell"
        />

        <Column
          field=""
          header=""
          bodyStyle={{ flex: 'none', paddingInline: '8px' }}
          body={buttonLike}
        />
        <Column
          headerStyle={{
            paddingRight: '16px',
            textAlign: 'end',
          }}
          field="duration"
          bodyStyle={{
            textAlign: 'end',
            paddingRight: '16px',
            paddingLeft: '8px',
            flex: 'none',
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
