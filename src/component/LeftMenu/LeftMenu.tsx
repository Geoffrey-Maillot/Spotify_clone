// Import Component =>
import MenuLink from './MenuLink/MenuLink';
import CreatePlaylistButton from './CreatePlaylistButton';

// Import Image =>
import logo from '../../assets/img/Spotify_Logo.png';
import LikedTraksLink from './LikedTraksLink';

const LeftMenu = () => {
  return (
    <div className="p-0 pl-6 pt-6 pr-3 bg-dark-400 max-h-[calc(100vh_-_5.625rem)] grid justify-items-start">
      <div className="w-[7.8rem] h-10 mb-9">
        <img src={logo} alt="Logo Spotify" />
      </div>
      <ul className="mb-9">
        <li>
          <MenuLink to="#" icon iconType="home" label="Acceuil" />
          <MenuLink to="#" icon iconType="search" label="Rechercher" />
          <MenuLink to="#" icon iconType="library" label="Bibliothèque" />
        </li>
      </ul>
      <CreatePlaylistButton />
      <LikedTraksLink to="#" />
      <div className="w-full h-[.5px] bg-gray-200 shadow-[0_3px-2px_rgba(0,0,0,.6)] rounded" />

      <ul className="overflow-auto h-full scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-400">
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
