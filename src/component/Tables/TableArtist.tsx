import { useState, useEffect } from 'react';

// Import PrimeReact
import { DataTable, DataTableResponsiveLayoutType } from 'primereact/datatable';
import { Column } from 'primereact/column';

// Import Icon
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import Paragraph from '../Typo/Paragraph/Paragraph';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// TODO : Remplacer any par les infos provenant de l'api

// Import Interface
import { Track } from '../../service/interface/Album';

interface Props {
  tracksList: Array<Track>;
}

const TableArtist = ({ tracksList }: Props) => {
  const BREAKPOINT = '600px';
  const isMobile = useGetWindowWidth() <= parseInt(BREAKPOINT, 10);
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

  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');

  useEffect(() => {
    const responsiveStyle = isMobile ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [isMobile]);

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
      <div
        className={`flex justify-start items-center text-left gap-3 ${
          isMobile && 'flex-row-reverse '
        }`}
      >
        <div className="w-10 h-10 object-cover object-center flex-none">
          <img src={rowData?.img} alt={rowData?.title} />
        </div>
        <div className=" overflow-hidden title pr-3">
          <Paragraph
            size="lg"
            color="white"
            label={rowData?.title}
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
        value={tableIsVisible ? trackList10 : trackList5}
        dataKey="track"
        selectionMode="single"
        responsiveLayout={responsiveTableStyle}
        breakpoint={BREAKPOINT}
        className=" text-gray-200 text-left table-artist"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
        rows={5}
      >
        {!isMobile && (
          <Column
            bodyStyle={{ textAlign: 'center', fontSize: '1rem', width: '40px' }}
            field="track"
          />
        )}

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
          bodyStyle={{ paddingLeft: '40px', textAlign: 'end' }}
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

export default TableArtist;
