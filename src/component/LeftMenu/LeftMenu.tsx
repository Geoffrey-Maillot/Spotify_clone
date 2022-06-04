// Import Component =>
import MenuLink from './MenuLink/MenuLink';
import CreatePlaylistButton from './CreatePlaylistButton';

// Import Image =>
import logo from '../../assets/img/Spotify_Logo.png';
import LikedTraksLink from './LikedTraksLink';

const LeftMenu = () => {
  return (
    <div className="w-80 mw-32 mx-[25rem]  resize-x pl-6 pt-6 pr-3 bg-dark-400">
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
    </div>
  );
};

export default LeftMenu;
