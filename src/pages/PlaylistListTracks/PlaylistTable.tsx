// Import PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
    dutation: string;
  }>;
}

  const buttonLike = () => <button>coeur</button>;

  const titleData = (rowData: any) => {
  console.log(rowData)
    return <p>{rowData?.title.name}</p>;
  };

const PlaylistTable = ({ tracksList }: Props) => {


  return (

    <DataTable value={tracksList} responsiveLayout="scroll" className=' text-gray-200 text-left'>
      <Column headerStyle={{width: '40px', textAlign: 'center'}} bodyStyle={{textAlign: 'center'}} field="track" header="#" />
      <Column field="title" header="Titre" body={titleData} />
      <Column field="album" header="Album" />
      <Column field="" header="" body={buttonLike} />
      <Column field="added" header="Ajoutée le" />
      <Column field="duration" header="Time" />
    </DataTable>
  );
};

export default PlaylistTable;
