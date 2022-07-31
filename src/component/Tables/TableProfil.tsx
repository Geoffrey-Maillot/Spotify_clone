import { useState } from 'react';

// Import PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
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
  duration: string;
  liked: boolean;
}

interface Props {
  tracksList: Array<Track>;
}

// == Component =>
const TableProfil = ({ tracksList }: Props) => {
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
      <div className="flex justify-start flex-row items-center text-left gap-3">
        <div className="w-10 h-10 object-cover object-center">
          <img src={rowData?.img} alt={rowData?.title} />
        </div>
        <div className="overflow-hidden title">
          <Paragraph size="lg" color="white" label={rowData?.title} />
          <Paragraph size="lg" color="lightGray" label={rowData?.artist} />
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

        <Column field="album" bodyStyle={{ width: '' }} />

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
    </div>
  );
};

export default TableProfil;
