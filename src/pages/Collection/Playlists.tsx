// Import component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';
import CardFirst, { Type } from '../../component/Cards/CardFirst';
import InfiniteScroll from '../../component/UtilsComponents/InfiniteScroll';
import CardSkeleton from '../../component/Skeleton/CardSkeleton';

// Spotify
import { useGetCurrentUserPlaylists } from '../../service/spotify/playlist';
import { useGetLikedTracks } from '../../service/spotify/track';

// == Component =>
const Playlists = () => {
  const {
    data: dataPlaylists,
    error: errorPlaylist,
    isLoading: isLoadingPlaylists,
    fetchNextPage: fetchNextPagePlaylists,
    hasNextPage: hasNextPagePlaylists,
  } = useGetCurrentUserPlaylists();

  const { data: dataLikedTracks, isLoading: isLoadingLikedTracks } =
    useGetLikedTracks();

  let listLikedTracks: Array<{ track: string; artist: string }> = [];
  let playlists: Array<SpotifyApi.PlaylistObjectSimplified> = [];
  const total: number | undefined = dataLikedTracks?.pages[0].total;

  dataLikedTracks?.pages[0]?.items.forEach((item) =>
    listLikedTracks.push({
      artist: item.track.artists[0].name,
      track: item.track.name,
    })
  );

  dataPlaylists?.pages
    .flat()
    .forEach((item) => (playlists = [...playlists, ...item.items]));

  return (
    <Layout>
      <section className="px-8 pt-6">
        <H2 size="xl2"> Playlist </H2>
        {errorPlaylist && (
          <div>
            Une erreur est survenue pendant le chargement des playlist 🙁
          </div>
        )}
        {isLoadingPlaylists && <CardSkeleton />}
        {playlists.length === 0 && (
          <div>
            Oh vous n'avez pas encore de playlist 🙁? Créer votre première
            playlist : Créer le bouton
          </div>
        )}
        <InfiniteScroll
          trigger={fetchNextPagePlaylists}
          hasNextPage={hasNextPagePlaylists}
        >
          <Grid>
            <CardFirst
              type={Type.PLAYLIST}
              total={total}
              listTitleTracks={listLikedTracks}
            />

            {playlists.map((playlist) => (
              <CardMusic key={playlist.id} {...playlist} />
            ))}
          </Grid>
        </InfiniteScroll>
      </section>
    </Layout>
  );
};

export default Playlists;
