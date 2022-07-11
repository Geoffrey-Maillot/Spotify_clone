import { useState, useLayoutEffect } from 'react';

// Import Hook
import { useGetWindowWidth } from '../../hook/useGetWindowWidth';

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
  title: {
    img: string;
    name: string;
  };
  like: number;
  duration: string;
  liked: boolean;
}

interface Props {
  tracksList: Array<Track>;
}

const TableTracks = ({ tracksList }: Props) => {
  const [selectedRow, setSelectedRow] = useState<Track | null>(null);

  const trackList5 = tracksList.slice(0, 5);
  const trackList10 = tracksList.slice(0, 10);

  const [tableIsVisible, toggleTableIsVisible] = useState(false);

  const showTable = () => {
    toggleTableIsVisible(true);
  };

  const hideTable = () => {
    toggleTableIsVisible(false);
  };

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
      <div className="flex justify-start flex-row items-center text-left gap-3">
        <div className="w-10 h-10 object-cover object-center">
          <img src={rowData?.title?.img} alt={rowData.title.name} />
        </div>
        <div className="min-w-[200px] overflow-hidden title">
          <Paragraph size="lg" color="white" label={rowData?.title?.name} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <DataTable
        value={tableIsVisible ? trackList10 : trackList5}
        dataKey="track"
        selectionMode="single"
        responsiveLayout="scroll"
        className=" text-gray-200 text-left "
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
        rows={5}
      >
        <Column
          bodyStyle={{ textAlign: 'center', fontSize: '1rem', width: '40px' }}
          field="track"
        />
        <Column
          field="title"
          bodyStyle={{ width: '', padding: '8px 0' }}
          body={titleContent}
        />

        <Column field="like" bodyStyle={{ width: '' }} />

        <Column
          field=""
          header=""
          bodyStyle={{ width: '60px', textAlign: 'end' }}
          body={buttonLike}
        />
        <Column
          field="duration"
          bodyStyle={{
            textAlign: 'end',
            paddingRight: '30px',
            width: '100px',
            maxWidth: '100px',
          }}
        />
      </DataTable>
      {tableIsVisible ? (
        <button
          onClick={hideTable}
          className="uppercase text-gray-200 hover:text-white font-circularBold text-xs mt-4"
        >
          Afficher moins
        </button>
      ) : (
        <button
          onClick={showTable}
          className="uppercase text-gray-200 hover:text-white font-circularBold text-xs mt-4"
        >
          Afficher plus
        </button>
      )}
    </div>
  );
};

export default TableTracks;
