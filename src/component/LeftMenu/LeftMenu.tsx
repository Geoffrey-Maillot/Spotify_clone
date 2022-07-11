// Import Component =>
import MenuLink from './MenuLink/MenuLink';
import CreatePlaylistButton from './CreatePlaylistButton';

// Import Image =>
import logo from '../../assets/img/Spotify_Logo.png';
import LikedTraksLink from './LikedTraksLink';
import EpisodeLink from './EpisodeLink';

const LeftMenu = () => {
  return (
    <div className=" w-full p-0  pt-6  bg-dark-400 max-h-[calc(100vh_-_5.625rem)]  grid justify-items-start ">
      <div className="w-[8.1875rem] h-10 mb-4 ml-6    ">
        <img src={logo} alt="Logo Spotify" />
      </div>
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

      <ul className=" w-full overflow-y-scroll h-full scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-400 px-6">
        <MenuLink to={`/playlist/${'id12345'}`} label="Hits du Moment" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Carnival" /> <MenuLink to={`/playlist/${'id12345'}`} label="Osocity" />
        <MenuLink to={`/playlist/${'id12345'}`} label="sega" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Radios" /> <MenuLink to={`/playlist/${'id12345'}`} label="Rousseau" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Fr" /> <MenuLink to={`/playlist/${'id12345'}`} label="Epic Musique" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Playlist Piano" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Solo Guitare" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Reggae" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Classique détente" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Posée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Sport" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="tabata" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Rap Us" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Podcast" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Zen" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="974 Sega" /> <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Titres Shazam" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Classique musique pour lire" />
        <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
        <MenuLink
          to={`/playlist/${'id12345'}`}
          label="Titre super long pour styliser les trois petits points"
        />
        <MenuLink to={`/playlist/${'id12345'}`} label="Soirée" />
      </ul>
    </div>
  );
};

export default LeftMenu;
