// Import component
import Layout from '../../component/Layout/Layout';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';
import CardFirst from '../../component/Cards/CardFirst';
import { useGetCurrentUserPlaylists } from '../../service/spotify/playlist';
import InfiniteScroll from '../../component/UtilsComponents/InfiniteScroll';

// == Component =>
const Playlists = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGetCurrentUserPlaylists();

  let playlists: Array<SpotifyApi.PlaylistObjectSimplified> = [];

  data?.pages
    .flat()
    .forEach((item) => (playlists = [...playlists, ...item.items]));
  console.log(playlists);

  return (
    <Layout>
      <H2 size="xl2"> Playlist </H2>
      <InfiniteScroll grid trigger={fetchNextPage} hasNextPage={hasNextPage}>
        <CardFirst type="playlist" listTitle={[]} />
        {playlists.map((playlist) => (
          <CardMusic key={playlist.id} {...playlist} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
};

export default Playlists;
