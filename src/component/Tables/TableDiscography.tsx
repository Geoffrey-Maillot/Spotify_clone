import { useState } from 'react';

// Import PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Paragraph from '../Typo/Paragraph/Paragraph';

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
      <div className="title">
        <Paragraph size="lg" color="white" label={rowData?.title} />
        <Paragraph size="sm" color="lightGray" label={rowData?.artist} />
      </div>
    );
  };

  return (
    <div className="px-5">
      <DataTable
        value={tracksList}
        dataKey="track"
        selectionMode="single"
        responsiveLayout="scroll"
        className=" text-gray-200 text-left table-tracks"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
        rows={5}
      >
        <Column
          bodyStyle={{ textAlign: 'center', width: '40px',fontSize: '1rem' }}
          field="track"
          header="#"
          headerStyle={{ width: '40px', textAlign: 'center', fontSize: '1rem' }}
        />
        <Column
          field="title"
          bodyStyle={{ width: '', padding: '8px 0' }}
          body={titleContent}
          header="Title"
        />

        <Column
          field=""
          header=""
          bodyStyle={{ width: '60px', textAlign: 'end' }}
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
