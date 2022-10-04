import { Navigate } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';

// Import Component
import Layout from 'component/Layout/Layout';
import H1 from 'component/Typo/H1/H1';
import Paragraph from 'component/Typo/Paragraph/Paragraph';
import H2 from 'component/Typo/H2/H2';
import TableTracks from 'component/Tables/TableTracks';
import ButtonPlay from 'component/Button/ButtonPlay/ButtonPlay';
import InfiniteScroll from 'component/UtilsComponents/InfiniteScroll';

// Function
import { chunkTable, flatAndMergeArray } from 'service/utils/arrayFunctions';

// Spotify
import {
  useAddToLikedTracks,
  useCheckTracksAreAlreadySaved,
  useGetLikedTracks,
  useRemoveFromLikedTracks,
} from 'service/spotify/track';
import { useGetCurrentUser } from 'service/spotify/user';

// React Query
import { useMutation, useQueryClient } from '@tanstack/react-query';

const LikedTracks = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching, isError, fetchNextPage, hasNextPage } =
    useGetLikedTracks();

  const { data: dataUser } = useGetCurrentUser();
  const userName = dataUser?.display_name;
  const imgUser = dataUser?.images?.at(0)?.url;

  let tracksList: any = []; //? Typer correctement
  data?.pages.flat().forEach((track) => {
    tracksList = [...tracksList, ...track.items];
  });

  const trackNumber = tracksList?.length;

  const listIdTracks = tracksList.map((track: any) => track.track.id);

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

  const removeLikedTracksMutation = useMutation(useRemoveFromLikedTracks, {
    onSuccess: () => {
      queryClient.invalidateQueries(['likedTracks']);
    },
  });

  if (isError) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <header className="h-[18rem] w-full  px-8 py-6 ] bg-gradient-to-b from-[#4B3691] to-[#2B1E53] flex item-end justify-start gap-4">
        <div className="aspect-square hidden md:flex items-center justify-center bg-gradient-to-br from-[#4014B7] to-[#7B8F89] shadow-2xl">
          <AiFillHeart size="5rem" color={'#fff'}/>
        </div>
        <div className="flex flex-col justify-end items-start">
          <span className="mb-4">
            <H2 label="PLAYLIST" />
          </span>
          <H1 label="Vos épisodes" />
          <div className="mt-4 flex items-center justify-start gap-1">
            <div className="w-6 h-6 rounded-full object-cover object-center overflow-hidden">
              <img src={imgUser} alt={userName} />
            </div>
            <H2
              className="hidden sm:block"
              size="lg"
              color="white"
              label={userName}
            />
            <GoPrimitiveDot color="white" size=".5rem" />
            {trackNumber > 0 && (
              <Paragraph
                label={`${trackNumber} titre${trackNumber > 1 ? 's' : ''}`}
                color="white"
                size="lg"
              />
            )}
          </div>
        </div>
      </header>
      <div className="pt-8 pl-10 pb-4">
        <ButtonPlay size="large" />
      </div>
      <InfiniteScroll trigger={fetchNextPage} hasNextPage={hasNextPage}>
        <TableTracks
          tracksList={tracksList}
tracksIsLiked={tracksIsLiked}
          isLoading={isLoading}
          isFetching={isFetching}
          removeToLikedTracks={removeLikedTracksMutation}
        />
      </InfiniteScroll>
    </Layout>
  );
};

export default LikedTracks;
