// Import Router
import { useParams } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import H2 from '../component/Typo/H2/H2';
import TableTracks from '../component/Tables/TableTracks';
import HeaderBandPlay from '../component/HeaderBandPlay/HeaderBandPlay';
import InfiniteScroll from '../component/UtilsComponents/InfiniteScroll';

// Spotify
import {
  useGetPlaylist,
  useGetPlaylistTracks,
} from '../service/spotify/playlist';
import {
  useCheckTracksAreAlreadySaved,
  useAddToLikedTracks,
  useRemoveFromLikedTracks,
} from '../service/spotify/track';

// Utils
import { chunkTable, flatAndMergeArray } from '../service/utils/arrayFunctions';

// Hook
import { useGetWindowWidth } from '../service/hook/useGetWindowWidth';

// React Query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// == Component =>
const Playlist = () => {
  const id = useParams().id as string;
  const windowWidth = useGetWindowWidth();
  const isBackgroundImage = windowWidth < 781;

  const queryClient = useQueryClient();

  const {
    data: dataPlaylist,
    error: errorPlaylist,
    isLoading: isLoadingPlaylist,
  } = useGetPlaylist(id);

  const {
    data: dataTracks,
    error: errorTracks,
    isLoading: isLoadingTracks,
    isFetching: isFetchingTracks,
    fetchNextPage: fetchNextPageTracks,
    hasNextPage: hasNextPageTracks,
  } = useGetPlaylistTracks(id);

  const addLikedTracksMutation = useMutation(useAddToLikedTracks, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tracksAreAlreadySaved']);
    },
  });

  const removeLikedTracksMutation = useMutation(useRemoveFromLikedTracks, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tracksAreAlreadySaved']);
    },
  });

  let tracksList: Array<SpotifyApi.PlaylistTrackObject> = [];

  dataTracks?.pages.flat().forEach((track) => {
    tracksList = [...tracksList, ...track.items];
  });

  // List de l'Id des tracks utilisé pour savoir si l'id est liké ou pas
  const listIdTracks = tracksList.map((track) => track.track.id);

  const listIdTracksChunked = chunkTable(listIdTracks, 50);

  const checkIfTracksIsLiked =
    useCheckTracksAreAlreadySaved(listIdTracksChunked);

  const listTracksLikedOrNot = checkIfTracksIsLiked.map(
    (response) => response.data
  );

  const tracksIsLiked = flatAndMergeArray(
    listIdTracksChunked,
    listTracksLikedOrNot
  );

  const imgPlaylist = dataPlaylist?.images.at(0);

  const bgStyle = {
    backgroundImage: isBackgroundImage ? `url(${imgPlaylist?.url})` : '',
  };

  if (errorPlaylist) {
    return (
      <Layout>
        <div className="px-8 pt-6 font-circularBold text-lg text-white">
          Une erreur est survenue pendant le chargement de la playlist
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <header
          className="h-[22rem] w-full px-8 pb-6 ]  bg-cover bg-center bg-no-repeat flex flex-row gap-4 items-end justify-start"
          style={bgStyle}
        >
          <div className="w-[12.5rem] md:w-[14.68rem] xl:w-[20rem] aspect-square hidden md:block">
            <img src={imgPlaylist?.url} alt={dataPlaylist?.name} />
          </div>
          <div className="flex flex-col justify-end items-start md:bg-dark-400/0 bg-dark-400/40  rounded p-2">
            <span className="mb-4">
              <H2 className="uppercase" label={dataPlaylist?.type} />
            </span>
            <H1 label={dataPlaylist?.name} />
            <span className="mt-4">
              <Paragraph
                size="lg"
                color="lightWhite"
                label={dataPlaylist?.description}
              />
            </span>
            <div className="flex justify-start items-center mt-4">
              {!isLoadingPlaylist && dataPlaylist?.owner.display_name && (
                <>
                  <span>
                    <Paragraph
                      label={dataPlaylist?.owner.display_name}
                      color="white"
                    />
                  </span>
                  <span>
                    <GoPrimitiveDot
                      size=".6rem"
                      color="#fff"
                      className="mx-1"
                    />
                  </span>
                </>
              )}
              {!isLoadingPlaylist &&
                dataPlaylist &&
                dataPlaylist.followers.total > 0 && (
                  <>
                    <span>
                      <Paragraph
                        color="white"
                        label={dataPlaylist?.followers.total + ' like'}
                      />
                    </span>
                    <span>
                      <GoPrimitiveDot
                        size=".6rem"
                        color="#b3b3b3"
                        className="mx-1"
                      />
                    </span>
                  </>
                )}
              {!isLoadingPlaylist && (
                <span>
                  <Paragraph
                    color="white"
                    label={`${dataPlaylist?.tracks.total} ${
                      dataPlaylist && dataPlaylist?.tracks?.total > 1
                        ? 'titres'
                        : 'titre'
                    }`}
                  />
                </span>
              )}
            </div>
          </div>
        </header>
        <HeaderBandPlay type="playlist" />
        {errorTracks && (
          <div className="text-white text-lg font-circularBold">
            Une erreur a eu lieu pendant le chargement des titres
          </div>
        )}
        {!errorTracks && (
          <InfiniteScroll
            trigger={fetchNextPageTracks}
            hasNextPage={hasNextPageTracks}
          >
            <TableTracks
              tracksList={tracksList}
              isLoading={isLoadingTracks}
              isFetching={isFetchingTracks}
              tracksIsLiked={tracksIsLiked}
              addToLikedTracks={addLikedTracksMutation}
              removeToLikedTracks={removeLikedTracksMutation}
            />
          </InfiniteScroll>
        )}
      </>
    </Layout>
  );
};

export default Playlist;
