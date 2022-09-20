// Import Component =>
import MenuLink from './MenuLink/MenuLink';
import CreatePlaylistButton from './MenuLink/CreatePlaylistButton';
import InfiniteScroll from '../UtilsComponents/InfiniteScroll';
import Spinner from '../Spinner/Spinner';

// Import Router
import { Link } from 'react-router-dom';

// Import Image =>
import logo from '../../assets/img/Spotify_Logo.png';
import LikedTraksLink from './MenuLink/LikedTraksLink';
import EpisodeLink from './MenuLink/EpisodeLink';

// Spotify Queries
import { useGetCurrentUserPlaylists } from '../../service/spotify/playlist';

interface Props {
  forwardRef?: React.RefObject<HTMLDivElement>;
}

// == Component =>
const LeftMenu = ({ forwardRef }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGetCurrentUserPlaylists();

  let playlists: Array<SpotifyApi.PlaylistObjectSimplified> = [];

  data?.pages
    .flat()
    .forEach((item) => (playlists = [...playlists, ...item.items]));

  return (
    <div
      ref={forwardRef}
      className="transition fixed -left-[100%] z-50 lg:static overflow-hidden h-[-webkit-fill-available] w-1/3 top-[4.25rem] max-h-[calc(100vh_-_9.875rem)]  min-w-[15.625rem] lg:min-w-full lg:w-full p-0  pt-6 bg-dark-400  lg:max-h-[calc(100vh_-_5.625rem)] grid  justify-items-start "
    >
      <Link to="/" className="w-[8.1875rem] h-10 mb-4 ml-6 ">
        <img src={logo} alt="Logo Spotify" />
      </Link>
      <ul className="mb-5 px-6 w-full">
        <li>
          <MenuLink to="/" icon iconType="home" label="Acceuil" />
          <MenuLink to="/search" icon iconType="search" label="Rechercher" />
          <MenuLink
            to="/collection"
            icon
            iconType="library"
            label="Bibliothèque"
          />
        </li>
      </ul>
      <ul className="px-6">
        <CreatePlaylistButton />
        {/*//Todo : Liked Tracks si il y a des titres likés / EpisodesLink si il y a des episodes likés  */}
        <LikedTraksLink to="/collection/tracks" />
        <EpisodeLink to="/collection/episodes" />
      </ul>
      <div className="relative w-full h-[1px]">
        <hr className="w-full h-[1px] bg-dark-250  border-none rounded relative z-50" />
        <div className="absolute  z-10 right-4 left-0  top-0 h-4 bg-gradient-to-b from-[#00000070]/70 to-transparent " />
      </div>

      <ul className=" w-full overflow-y-scroll h-full scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-400 px-6 ">
        {error ? (
          <div className=" font-circularBook text-sm text-white mt-4">
            Une erreur est survenue pendant le chargement des playlist
          </div>
        ) : isLoading ? (
          <Spinner small/>
        ) : (
          <InfiniteScroll hasNextPage={hasNextPage} trigger={fetchNextPage}>
            {playlists.map((playlist) => (
              <MenuLink
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                label={playlist.name}
              />
            ))}
          </InfiniteScroll>
        )}
      </ul>
    </div>
  );
};

export default LeftMenu;
