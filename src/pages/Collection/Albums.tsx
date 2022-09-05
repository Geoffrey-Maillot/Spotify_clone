// Import component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';
import { useGetMySavedAlbums } from '../../service/spotify/album';
import InfiniteScroll from '../../component/UtilsComponents/InfiniteScroll';
import CardSkeleton from '../../component/Skeleton/CardSkeleton';

// == Component =>
const Albums = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGetMySavedAlbums();

  let albums: Array<SpotifyApi.SavedAlbumObject> = [];

  data?.pages.flat().forEach((album) => {
    albums = [...albums, ...album.items];
  });

  return (
    <Layout>
      <div className="px-8 pt-6">
        <section>
          <H2 size="xl2"> Albums </H2>

          {error && (
            <div>
              Une erreur est survenue pendant le chargement des playlist 🙁
            </div>
          )}

          {isLoading && <CardSkeleton />}
          {albums.length === 0 && (
            <div>
              <div>Oh on dirait que vous ne suivez aucun artist 🙁</div>
            </div>
          )}
          <InfiniteScroll trigger={fetchNextPage} hasNextPage={hasNextPage}>
            <Grid>
              {albums.map((album) => (
                <CardMusic key={album.album.id} {...album.album} />
              ))}
            </Grid>
          </InfiniteScroll>
        </section>
      </div>
    </Layout>
  );
};

export default Albums;
