import { useState } from 'react';

// Import PrimeReact
import {
  DataTable,
  DataTableSelectAllChangeParams,
} from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Paragraph from '../../component/Typo/Paragraph/Paragraph';

// TODO : Remplacer any par les infos provenant de l'api
interface Props {
  tracksList: Array<{
    track: number;
    title: {
      img: string;
      name: string;
      artist: string;
    };
    album: string;
    added: number;
    duration: string;
    liked: boolean;
  }>;
}

const PlaylistTable = ({ tracksList }: Props) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const onSelectRow = (e: any) => {
    setSelectedRow(e.value);
  };

  const buttonLike = (rowData: any) => {
    return (
      <span className="w-full flex justify-end">
        {rowData.liked ? (
          <AiFillHeart color="#1ed760" size="1.2rem" />
        ) : (
          <AiOutlineHeart size="1.2rem" />
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
      <div className="flex justify-start items-center gap-3">
        <div className="w-10 h-10 object-cover object-center">
          <img src={rowData?.title?.img} alt={rowData.title.name} />
        </div>
        <div className="min-w-[200px] overflow-hidden">
          <Paragraph size="lg" color="white" label={rowData?.title?.name} />
          <Paragraph
            size="sm"
            color="lightGray"
            label={rowData?.title?.artist}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-8">
      <DataTable
        value={tracksList}
        dataKey="track"
        selectionMode="single"
        responsiveLayout="scroll"
        className=" text-gray-200 text-left"
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

        <Column field="album" bodyStyle={{ width: '20%' }} header="Album" />

        <Column
          field="added"
          bodyStyle={{ width: '20%' }}
          header="Ajoutée le"
          body={addedContent}
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

export default PlaylistTable;