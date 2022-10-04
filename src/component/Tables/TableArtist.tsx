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
import { milisecondToMinOrHour } from 'service/utils/time';

// React Query
import { UseMutationResult } from '@tanstack/react-query';



interface Props {
tracksList: SpotifyApi.TrackObjectFull[]
isLoading: boolean;
  tracksIsLiked?: {
    id: string;
    liked: boolean | undefined;
  }[];
  addToLikedTracks?: UseMutationResult<
    SpotifyApi.SaveTracksForUserResponse,
    unknown,
    string[],
    unknown
  >;
  removeToLikedTracks: UseMutationResult<
    SpotifyApi.SaveTracksForUserResponse,
    unknown,
    string[],
    unknown
  >;
}

const TableArtist = ({ tracksList, isLoading, tracksIsLiked, addToLikedTracks, removeToLikedTracks }: Props) => {
  const BREAKPOINT = '600px';
  const isMobile = useGetWindowWidth() <= parseInt(BREAKPOINT, 10);
  const [selectedRow, setSelectedRow] = useState<SpotifyApi.TrackObjectFull | null>(null);

  const trackList5 = tracksList?.slice(0, 5);
  const trackList10 = tracksList?.slice(0, 10);

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

  const onMutate = (
    tracksState:
      | {
          id: string;
          liked: boolean | undefined;
        }
      | undefined
  ) => {
    const id = tracksState?.id as string;
    const isLiked = tracksState?.liked as boolean;

    if (!isLiked) {
      addToLikedTracks?.mutate([id]);
    } else {
      removeToLikedTracks.mutate([id]);
    }
  };

  const buttonLike = ({ id }: SpotifyApi.TrackObjectFull) => {
    const idIsLiked = tracksIsLiked?.find((item) => item.id === id);

    return (
      <button onClick={() => onMutate(idIsLiked)}>
        <span className="w-full flex justify-end">
          {idIsLiked?.liked ? (
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
      </button>
    );
  };

  const titleContent = (rowData: SpotifyApi.TrackObjectFull) => {

    const img = rowData?.album?.images[2]?.url
    return (
      <div
        className={`flex justify-start items-center text-left gap-3 ${
          isMobile && 'flex-row-reverse '
        }`}
      >
        <div className="w-10 h-10 object-cover object-center flex-none">
          <img src={img} alt={rowData?.name} />
        </div>
        <div className=" overflow-hidden title pr-3">
          <Paragraph
            size="lg"
            color="white"
            label={rowData?.name}
            clamp
            nbrLineClamp={1}
          />
        </div>
      </div>
    );
  };

 const Duration = ({duration_ms }: SpotifyApi.TrackObjectFull) => {
    return <span>{milisecondToMinOrHour(duration_ms)}</span>;
  };

  return (
    <div>
      <DataTable
        value={tableIsVisible ? trackList10 : trackList5}
        dataKey="id"
        selectionMode="single"
        responsiveLayout={responsiveTableStyle}
        breakpoint={BREAKPOINT}
        className=" text-gray-200 text-left table-artist"
        onSelectionChange={(e) => onSelectRow(e)}
        selection={selectedRow}
        rows={5}
        loading={isLoading}
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

        <Column
          field=""
          header=""
          bodyStyle={{ width: '60px', textAlign: 'end' }}
          body={buttonLike}
        />
        <Column
          field="duration"
          bodyStyle={{ paddingLeft: '40px', paddingRight: '20px', textAlign: 'end' }}
          body={Duration}
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
