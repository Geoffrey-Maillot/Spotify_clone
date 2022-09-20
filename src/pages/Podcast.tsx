// Import Router
import { useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import H2 from '../component/Typo/H2/H2';
import TableEpisodes from '../component/Tables/TableEpisodes';
import HeaderBandPlay from '../component/HeaderBandPlay/HeaderBandPlay';
import PanelHideContent from '../component/UtilsComponents/PanelHideContent';

// Hook
import { useGetWindowWidth } from '../service/hook/useGetWindowWidth';

// Function
import { chunkTable, flatAndMergeArray } from '../service/utils/arrayFunctions';

// Spotify
import {
  addToSavedShows,
  removeFromSavedShows,
  useContainsSavedShows,
  useGetShow,
} from '../service/spotify/show';
import {
  useGetShowEpisodes,
  useCheckEpisodeAreAlreadySaved,
} from '../service/spotify/episode';
import InfiniteScroll from '../component/UtilsComponents/InfiniteScroll';

// React Query
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Props {}

const Podcast = ({}: Props) => {
  const id = useParams().id as string;
  const windowWidth = useGetWindowWidth();

  const isBackgroundImage = windowWidth < 781;

  const queryClient = useQueryClient();

  const {
    data: dataShow,
    isLoading: isLoadingShow,
    error: errorShow,
  } = useGetShow(id);

  const {
    data: dataEpisodesList,
    isLoading: isLoadingEpisodeList,
    error: errorEpisodeList,
    hasNextPage: hasNextPageShow,
    fetchNextPage: fetchNextPageShow,
  } = useGetShowEpisodes(id);

  const { data: checkShowIsSaved } = useContainsSavedShows([id]);

  const saveShow = useMutation(addToSavedShows, {
    onSuccess: () => {
      queryClient.invalidateQueries(['containsSavedShow']);
    },
  });

  const removeFromSavedShow = useMutation(removeFromSavedShows, {
    onSuccess: () => {
      queryClient.invalidateQueries(['containsSavedShow']);
    },
  });

  const mutateShow = () => {
    if (checkShowIsSaved && dataShow && checkShowIsSaved[0]) {
      removeFromSavedShow.mutate([dataShow?.id]);
    } else if (checkShowIsSaved && dataShow && !!checkIfEpisodeIsLiked[0]) {
      saveShow.mutate([dataShow.id]);
    }
  };

  let showEpisodeList: Array<SpotifyApi.EpisodeObjectSimplified> = [];

  dataEpisodesList?.pages.flat().forEach((episodes) => {
    showEpisodeList = [...showEpisodeList, ...episodes.items];
  });

  const listIdEpisodes = showEpisodeList.map((episode) => episode.id);

  const listIdEpisodeChunked = chunkTable(listIdEpisodes, 50);

  const stringifiedListId = listIdEpisodeChunked.map((chunk) =>
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

  const imgShow = dataShow?.images.at(0);

  const bgStyle = {
    backgroundImage: isBackgroundImage ? `url(${imgShow?.url})` : '',
  };

  return (
    <Layout>
      <header
        className="h-[22rem] w-full px-8 pb-6  bg-cover bg-center bg-no-repeat flex flex-row gap-4 items-end justify-start"
        style={bgStyle}
      >
        <div className="w-[12.5rem] md:w-[14.68rem] xl:w-[20rem] aspect-square hidden md:block">
          <img src={imgShow?.url} alt={dataShow?.name} />
        </div>
        <div className="flex flex-col justify-end items-start md:bg-dark-400/0 bg-dark-400/40  rounded p-2">
          <span className="mb-4">
            <H2 label={dataShow?.type} />
          </span>
          <H1 label={dataShow?.name} />
          <span className="mt-4">
            <H2 size="xl2" color="white" label={dataShow?.publisher} />
          </span>
        </div>
      </header>
      <HeaderBandPlay
        type="podcast"
        subscriber={checkShowIsSaved && checkShowIsSaved[0]}
        mutateShow={mutateShow}
      />
      <div className="flex items-start justify-start pl-4 gap-4 xl:flex-row flex-col-reverse">
        <div className=" xl:w-3/5 w-full max-w-[726px] xl:max-w-max">
          {!errorEpisodeList && (
            <InfiniteScroll
              hasNextPage={hasNextPageShow}
              trigger={fetchNextPageShow}
            >
              <TableEpisodes
                episodesList={showEpisodeList}
                episodesAreLikedOrNot={episodesAreLikedOrNot}
              />
            </InfiniteScroll>
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-6  xl:w-2/5 w-full max-w-[726px] xl:max-w-max px-4">
          <span className="pt-4">
            <H2 size="xl2" label="Plus d'infos" />
          </span>
          <PanelHideContent>
            <Paragraph size="lg">{dataShow?.description}</Paragraph>
          </PanelHideContent>

          <div>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Culture
            </span>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Histoire
            </span>
            <span className="bg-[#ffffff1a] text-white text-sm font-circularBold inline-block h-7 px-3 py-2 rounded-full mr-2 mb-2">
              Science
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;
