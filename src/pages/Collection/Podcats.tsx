// Import component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';
import CardFirst from '../../component/Cards/CardFirst';

import { Type } from '../../component/Cards/CardFirst';
import { useGetSavedShows } from '../../service/spotify/show';
import CardSkeleton from '../../component/Skeleton/CardSkeleton';
import { playlist } from '../../component/HeaderBandPlay/HeaderBandPlay.stories';
import InfiniteScroll from '../../component/UtilsComponents/InfiniteScroll';
import { useGetMyEpisodes } from '../../service/spotify/episode';

// == Component =>
const Podcasts = () => {
  const {
    data: dataShows,
    error: errorShows,
    isLoading: isLoadingShows,
    fetchNextPage: fetchNextPageShows,
    hasNextPage: hasNextPageShows,
  } = useGetSavedShows();

  const { data: dataEpisodes, isLoading: isLoadingEpisodes } =
    useGetMyEpisodes();
  let shows: Array<SpotifyApi.SavedShowObject> = [];
  let listEpisodes: Array<string> = [];
  const total: number | undefined = dataEpisodes?.pages[0].total;

  dataEpisodes?.pages[0].items.forEach((item: any) => {
    listEpisodes.push(item.episode.name);
  });

  dataShows?.pages
    .flat()
    .forEach((item) => (shows = [...shows, ...item.items]));

  return (
    <Layout>
      <section className="px-8 pt-6">
        <H2 size="xl2"> Podcasts </H2>

        {errorShows && (
          <div>
            Une erreur est survenue pendant le chargement des podcats 🙁
          </div>
        )}

        {isLoadingShows && <CardSkeleton />}

        {playlist.length === 0 && (
          <div>
            Oh vous n'avez pas encore de playlist 🙁? Créer votre première
            playlist : Créer le bouton
          </div>
        )}
        <InfiniteScroll
          trigger={fetchNextPageShows}
          hasNextPage={hasNextPageShows}
        >
          <Grid>
            <CardFirst
              listTitleEpisodes={listEpisodes}
              total={total}
              type={Type.PODCAST}
            />
            {shows.map((item) => (
              <CardMusic key={item.show.id} {...item.show} />
            ))}
          </Grid>
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default Podcasts;
