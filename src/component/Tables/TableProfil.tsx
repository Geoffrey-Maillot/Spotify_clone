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

// Import Interface
import { Track } from '../../service/interface/Album';

interface Props {
  tracksList: Array<Track>;
}

// == Component =>
const TableProfil = ({ tracksList }: Props) => {
  const BREAKPOINT = 640;
  const isMobile = useGetWindowWidth() <= BREAKPOINT;
  const [selectedRow, setSelectedRow] = useState<Track | null>(null);

  const [responsiveTableStyle, setResponsiveTableStyle] =
    useState<DataTableResponsiveLayoutType>('scroll');

  useEffect(() => {
    const responsiveStyle = isMobile ? 'stack' : 'scroll';
    setResponsiveTableStyle(responsiveStyle);
  }, [isMobile]);

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
      <div
        className={` flex justify-start ${
          isMobile ? 'flex-row-reverse' : 'flex-row'
        } items-center text-left gap-3`}
      >
        <div className="w-10 h-10 object-cover object-center flex-none">
          <img src={rowData?.img} alt={rowData?.title} />
        </div>
        <div className="overflow-hidden title">
          <Paragraph
            size="lg"
            color="white"
            label={rowData?.title}
            clamp
            nbrLineClamp={2}
          />
          <Paragraph
            size="lg"
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
        className=" text-gray-200 text-left, table-profil "
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
          />
        )}

        <Column
          field="title"
          bodyStyle={{ padding: '8px' }}
          body={titleContent}
        />

        <Column field="album" bodyStyle={{ padding: '8px' }} />

        <Column
          field=""
          header=""
          bodyStyle={{ textAlign: 'end', padding: '8px' }}
          body={buttonLike}
        />
        <Column
          field="duration"
          bodyStyle={{
            textAlign: 'end',
            paddingRight: '16px',
            paddingLeft: '8px',
          }}
        />
      </DataTable>
    </div>
  );
};

export default TableProfil;
