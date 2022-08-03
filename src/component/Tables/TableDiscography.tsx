import { useState, useEffect } from 'react';

// Import PrimeReact
import { DataTable, DataTableResponsiveLayoutType } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Paragraph from '../Typo/Paragraph/Paragraph';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// TODO : Remplacer any par les infos provenant de l'api

interface Track {
  track: number;
  title: string;
  artist: string;
  duration: string;
  liked: boolean;
}

interface Props {
  tracksList: Array<Track>;
}

const TableDiscography = ({ tracksList }: Props) => {
  const BREAKPOINT = 640;
  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');

  const isMobile = useGetWindowWidth() <= BREAKPOINT;
  const [selectedRow, setSelectedRow] = useState<Track | null>(null);

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

  const titleContent = (rowData: any) => {
    return (
      <div className={`title ${isMobile && 'text-right'}`}>
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
    );
  };

  useEffect(() => {
    const responsiveStyle = isMobile ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [isMobile]);

  return (
    <div className="px-5">
      <DataTable
        value={tracksList}
        dataKey="track"
        selectionMode="single"
        responsiveLayout={responsiveTableStyle}
        className=" text-gray-200 text-left table-discography"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
        rows={5}
      >
        {!isMobile && (
          <Column
            bodyStyle={{
              textAlign: 'center',
              fontSize: '1rem',
              padding: '8px',
            }}
            field="track"
            header="#"
            headerStyle={{ textAlign: 'center', fontSize: '1rem' }}
          />
        )}

        <Column
          field="title"
          bodyStyle={{ padding: '8px' }}
          body={titleContent}
          header="Title"
        />

        <Column
          field=""
          header=""
          bodyStyle={{ textAlign: 'end', padding: '8px' }}
          body={buttonLike}
        />
        <Column
          headerStyle={{
            width: '90px',
            paddingRight: '16px',
          }}
          field="duration"
          bodyStyle={{
            textAlign: 'end',
            paddingRight: '16px',
            paddingLeft: '8px',
          }}
          header={
            <span className="flex justify-end">
              <AiOutlineClockCircle size="1.2rem" />
            </span>
          }
        />
      </DataTable>
    </div>
  );
};

export default TableDiscography;
