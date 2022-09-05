// Import component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';

// Interface
import { useGetFollowedArtist } from '../../service/spotify/follow';
import InfiniteScroll from '../../component/UtilsComponents/InfiniteScroll';
import CardSkeleton from '../../component/Skeleton/CardSkeleton';

// == Component =>
const Artists = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGetFollowedArtist();

  let artists: Array<SpotifyApi.ArtistObjectFull> = [];

  data?.pages.flat().forEach((item) => {
    artists = [...artists, ...item.artists.items];
  });
  return (
    <Layout>
      <div className="px-8 pt-6">
        <section>
          <H2 size="xl2"> Artistes </H2>
          {error && (
            <div>
              Une erreur est survenue pendant le chargement des playlist 🙁
            </div>
          )}
          {isLoading && <CardSkeleton />}
          {artists.length === 0 && (
            <div>Oh on dirait que vous ne suivez pas encore d'artists 🙁</div>
          )}

          <InfiniteScroll hasNextPage={hasNextPage} trigger={fetchNextPage}>
            <Grid>
              {artists.map((item, i) => (
                <CardMusic key={i} {...item} />
              ))}
            </Grid>
          </InfiniteScroll>
        </section>
      </div>
    </Layout>
  );
};

export default Artists;
