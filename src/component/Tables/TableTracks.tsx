import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

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

interface Props {
  tracksList: Array<SpotifyApi.PlaylistTrackObject>;
  isLoading: boolean;
  isFetching: boolean;
}

const TableTracks = ({ tracksList, isLoading, isFetching }: Props) => {
  const [selectedRow, setSelectedRow] =
    useState<SpotifyApi.PlaylistTrackObject | null>(null);
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

  const ButtonLike = (rowData: any) => {
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
  const AddedContent = ({ added_at }: any) => {
    const addedDate = dayjs(added_at);
    const todayDate = dayjs();
    const diffDate = todayDate.diff(addedDate, 'day');
    const addedFormatedDate = dayjs(added_at).format('DD MMM YYYY');

    const displayDate =
      diffDate === 0
        ? "Aujourd'hui"
        : diffDate > 30
        ? addedFormatedDate
        : `Il y a ${diffDate} jours`;

    return <p> {displayDate}</p>;
  };

  const TrackNumber = (rowData: any) => {
    return <span>{tracksList.indexOf(rowData) + 1}</span>;
  };

  const Duration = ({ track: { duration_ms } }: any) => {
    return (
      <span>{(duration_ms / (60 * 1000)).toFixed(2).split('.').join(':')}</span>
    );
  };

  const TitleContent = ({ track }: any) => {
    const artists = track.artists.map((artist: any) => artist.name).join(', ');

    return (
      <div className="flex justify-start flex-row-reverse md:flex-row items-center text-right md:text-left gap-3">
        <div className="w-10 h-10 object-cover object-center flex-none">
          <img src={track?.album?.images[2]?.url} alt={track?.name} />
        </div>
        <div className="title">
          <Paragraph
            size="lg"
            color="white"
            label={track?.name}
            clamp
            nbrLineClamp={1}
          />
          <Paragraph
            size="sm"
            color="lightGray"
            label={artists}
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
        loading={isFetching || isLoading}
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
          body={TrackNumber}
        />
        <Column
          field="title"
          bodyStyle={{ padding: '8px' }}
          header="Titre"
          body={TitleContent}
        />

        <Column
          field="album"
          bodyStyle={{ flex: 'none', paddingInline: '8px' }}
          header="Album"
          className="album"
          body={(rowData: any) => (
            <Paragraph
              label={rowData.track.album.name}
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
          body={AddedContent}
          className="hidden lg:table-cell"
        />

        <Column
          field=""
          header=""
          bodyStyle={{ flex: 'none', paddingInline: '8px' }}
          body={ButtonLike}
        />
        <Column
          headerStyle={{
            paddingRight: '16px',
            textAlign: 'end',
          }}
          body={Duration}
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
