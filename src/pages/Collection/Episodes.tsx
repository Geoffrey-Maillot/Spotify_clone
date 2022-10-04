// Import Router
import { Navigate } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';
import { BsBookmarkFill } from 'react-icons/bs';

// Import Component
import Layout from 'component/Layout/Layout';
import H1 from 'component/Typo/H1/H1';
import Paragraph from 'component/Typo/Paragraph/Paragraph';
import H2 from 'component/Typo/H2/H2';
import ButtonPlay from 'component/Button/ButtonPlay/ButtonPlay';
import TableEpisodes from 'component/Tables/TableEpisodes';
import InfiniteScroll from 'component/UtilsComponents/InfiniteScroll';

// Spotify
import {
  useCheckEpisodeAreAlreadySaved,
  useGetMyEpisodes,
} from 'service/spotify/episode';
import { useGetCurrentUser } from 'service/spotify/user';

// Function
import { chunkTable, flatAndMergeArray } from 'service/utils/arrayFunctions';

const Episodes = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetMyEpisodes();

  const { data: dataUser } = useGetCurrentUser();
  const userName = dataUser?.display_name;
  const imgUser = dataUser?.images?.at(0)?.url;

  const episodesResponse = data?.pages.flat()[0].items;
  const episodeList = episodesResponse?.map((episode: any) => episode.episode);
  const episodeNumber = episodeList?.length;

  const listIdEpisodes = episodeList?.map((episode: any) => episode.id);
  const listIdEpisodeChunked = chunkTable(listIdEpisodes, 50);
  const stringifiedListId = listIdEpisodeChunked?.map((chunk) =>
    chunk.join(',')
  );

  const checkIfEpisodeIsLiked =
    useCheckEpisodeAreAlreadySaved(stringifiedListId);

  const listEpisodeLikedOrNot = checkIfEpisodeIsLiked.map(
    (response) => response.data
  );

  const episodesAreLikedOrNot = flatAndMergeArray(
    listIdEpisodeChunked,
    listEpisodeLikedOrNot
  );

  if (isError) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <header className="h-[18rem] w-full  px-8 py-6 ] bg-gradient-to-b from-[#025B49] to-[#03342A] flex item-end justify-start gap-4">
        <div className="aspect-square hidden md:flex items-center justify-center bg-[#056952] shadow-2xl">
          <BsBookmarkFill color="#1ed760" size={'5rem'} />
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
            {episodeNumber > 0 && (
              <Paragraph
                label={`${episodeNumber} episode${
                  episodeNumber > 1 ? 's' : ''
                }`}
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
      <div className="max-w-[58.5rem]">
        {
          <InfiniteScroll hasNextPage={hasNextPage} trigger={fetchNextPage}>
            <TableEpisodes episodesList={episodeList} episodesAreLikedOrNot={episodesAreLikedOrNot} isLoading={isLoading} />
          </InfiniteScroll>
        }
      </div>
    </Layout>
  );
};

export default Episodes;
