// Import Component =>
import MenuLink from './MenuLink/MenuLink';
import CreatePlaylistButton from './CreatePlaylistButton';

// Import Image =>
import logo from '../../assets/img/Spotify_Logo.png';
import LikedTraksLink from './LikedTraksLink';

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
        <LikedTraksLink to="#" />
      </ul>
      <div className="relative w-full h-[1px]">
        <hr className="w-full h-[1px] bg-dark-250  border-none rounded relative z-50" />
        <div className="absolute  z-10 right-4 left-0  top-0 h-4 bg-gradient-to-b from-[#00000070]/70 to-transparent " />
      </div>

      <ul className=" w-full overflow-y-scroll h-full scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-400 px-6">
        {' '}
        <MenuLink to="#" label="Hits du Moment" />{' '}
        <MenuLink to="#" label="Carnival" /> <MenuLink to="#" label="Osocity" />{' '}
        <MenuLink to="#" label="sega" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Radios" /> <MenuLink to="#" label="Rousseau" />{' '}
        <MenuLink to="#" label="Fr" /> <MenuLink to="#" label="Epic Musique" />{' '}
        <MenuLink to="#" label="Playlist Piano" />{' '}
        <MenuLink to="#" label="Solo Guitare" />{' '}
        <MenuLink to="#" label="Reggae" />{' '}
        <MenuLink to="#" label="Classique détente" />{' '}
        <MenuLink to="#" label="Posée" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Sport" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="tabata" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Rap Us" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Podcast" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Zen" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="974 Sega" /> <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Titres Shazam" />{' '}
        <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink to="#" label="Classique musique pour lire" />{' '}
        <MenuLink to="#" label="Soirée" />{' '}
        <MenuLink
          to="#"
          label="Titre super long pour styliser les trois petits points"
        />{' '}
        <MenuLink to="#" label="Soirée" />{' '}
      </ul>
    </div>
  );
};

export default LeftMenu;
