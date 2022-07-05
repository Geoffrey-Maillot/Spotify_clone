import { useState, useRef, useEffect } from 'react';

// Import Router
import { useLocation, Link } from 'react-router-dom';
import NavLink from './NavLink';

// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import RenderIf from '../UtilsComponents/RenderIf';

// Import Hook
import { useGetWindowWidth } from '../../hook/useGetWindowWidth';

// Import React Icon
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { RiArrowDownSFill } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { BiLinkExternal } from 'react-icons/bi';


interface Props {
  panelSize: number;
}
//Todo: Background transparent quand scoll est en haut puis change de couleur quand on scoll avec une opacité en fonction de la distance du haut de la fenêtre
//Todo: Disable les boutons de nav si il n'y a pas de nav (voir su spotify)
//Todo: Supprimer les sugestions de l'input search

const HeaderNav = ({panelSize} : Props) => {
  const [search, setSearch] = useState('');
  const path = useLocation().pathname;
  const testPath = /\/collection/;
  const link: string = path.split('/')[2];
  const isPathCollection: boolean = testPath.test(path);
  const [headerWidth, setheaderWidth] = useState<number>(0);
  const [popupLinkIsVisible, togglePopupLinkIsVisible] = useState(false);
  const [popupAccountIsVisible, togglePopupAccountIsVisible] = useState(false);
  const windowWidth = useGetWindowWidth();

  const openClosePoupNavLink = () => {
    togglePopupLinkIsVisible(!popupLinkIsVisible);
  };
  const openClosePoupAccount = () => {
    togglePopupAccountIsVisible(!popupAccountIsVisible);
  };

  const links: { [x: string]: string } = {
    playlists: 'Playlists',
    podcasts: 'Podcasts',
    artists: 'Artistes',
    albums: 'Albums',
  };

  const searchOnChange = (e: React.ChangeEvent) => {
    const value: string = (e.target as HTMLInputElement).value;
    setSearch(() => value);
  };

  const resetSearch = () => {
    setSearch('');
  };

  const header = useRef<HTMLHeadElement | null>(null);

  useEffect(() => {
    if (header.current) {
      setheaderWidth(header.current?.clientWidth);
    }
  }, [windowWidth, panelSize]);

  return (
    <header
      ref={header}
      className="flex items-center content-start bg-dark-200 px-8 py-4 gap-4 sticky z-50 top-0 left-0 right-0"
    >
      {/* //? Voir pour faire un composant des boutons si on les retrouves encore ailleurs*/}
      <div className="flex content-start items-start gap-4">
        <button className="w-8 h-8 bg-dark-400/70 flex justify-center items-center cursor-pointer  rounded-full">
          <span>
            <HiOutlineChevronLeft size="1.2rem" color="#fff" />
          </span>
        </button>
        <button className="w-8 h-8 bg-dark-400/70  justify-center items-center cursor-pointer rounded-full hidden lg:flex">
          <span>
            <HiOutlineChevronRight size="1.2rem" color="#fff" />
          </span>
        </button>
      </div>
      <RenderIf bool={isPathCollection}>
        <ul className="flex items-center content-center gap-2">
          <li>
            <NavLink to="/collection/playlists" label="Playlists" />
          </li>
          <RenderIf bool={headerWidth > 640}>
            <li>
              <NavLink to="/collection/podcasts" label="Podcasts" />
            </li>
          </RenderIf>
          <RenderIf bool={headerWidth > 850}>
            <li>
              <NavLink to="/collection/artists" label="Artistes" />
            </li>
            <li>
              <NavLink to="/collection/albums" label="Albums" />
            </li>
          </RenderIf>

          {/* Dépliant navLinks */}
          <RenderIf bool={headerWidth < 850}>
            <div className="relative ">
              <button
                onClick={openClosePoupNavLink}
                className="flex justify-center items-center gap-2 bg-white/10 px-4 py-2 rounded"
              >
                {' '}
                <H2 label={links[link]} size="sm" color="white" />
                <RiArrowDownSFill color="white" size="1.4rem" />
              </button>
              <RenderIf bool={popupLinkIsVisible}>
                <div className="w-40 p-1 rounded absolute left-0 top-[calc(100%_+_0.5rem)] flex flex-col justify-start items-start bg-dark-250">
                  <RenderIf bool={headerWidth < 640}>
                    <li className="w-full">
                      <NavLink
                        to="/collection/podcasts"
                        color="blue"
                        label="Podcasts"
                        type="Secondary"
                      />
                    </li>
                  </RenderIf>
                  <RenderIf bool={headerWidth < 850}>
                    <li className="w-full">
                      <NavLink
                        to="/collection/artists"
                        color="blue"
                        label="Artistes"
                        type="Secondary"
                      />
                    </li>
                    <li className="w-full">
                      <NavLink
                        to="/collection/albums"
                        color="blue"
                        label="Albums"
                        type="Secondary"
                      />
                    </li>
                  </RenderIf>
                </div>
              </RenderIf>
            </div>
          </RenderIf>
        </ul>
      </RenderIf>
      <RenderIf bool={path === '/search'}>
        <div className="max-w-[364px] w-full h-10 bg-white flex justify-start items-center gap-4 px-4 rounded-full ">
          <RiSearchLine size="1.5rem" color="#000" />

          <input
            className="h-10 focus:outline-none grow"
            type="text"
            name="search"
            value={search}
            placeholder="Artistes, titres ou podcasts"
            autoComplete="false"
            onChange={(e) => searchOnChange(e)}
          />
          <RenderIf bool={search.length > 0}>
            <button className="ml-auto">
              <GrClose size="1.5rem" color="#000" onClick={resetSearch} />
            </button>
          </RenderIf>
        </div>
      </RenderIf>
      <div className="ml-auto flex items-center justify-center gap-7">
        <RenderIf bool={path === '/'}>
          <a
            className=" block bg-transparent border border-solid border-gray-500 rounded-full hover:scale-[1.04] hover:bg-dark-400 hover:border-white transition py-2 px-4"
            href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
          >
            <H2 label="S'abonner" color="white" size="sm" />
          </a>
        </RenderIf>
        <div className="relative">
          <button
            className="flex items-center justify-center gap-2 p-1 rounded-full bg-dark-400 hover:bg-dark-50"
            onClick={openClosePoupAccount}
          >
            <div className="w-7 h-7 ">
              <img
                className="rounded-full object-cover"
                src="https://source.unsplash.com/random/28x28"
                alt="Profil"
              />
            </div>
            <span className=" justify-start items-center g-2 hidden lg:flex">
              <H2 label="Geoffrey Maillot" size="sm" color="white" />
              <span className={`${popupAccountIsVisible && 'rotate-180 '}`}>
                <RiArrowDownSFill color="white" size="1.4rem" />
              </span>
            </span>
          </button>
          <RenderIf bool={popupAccountIsVisible}>
            <div className=" z-50 absolute w-[12.25rem] bg-dark-250 rounded p-1 flex flex-col right-0 top-[calc(100%_+_0.5rem)]">
              <a href="/">
                <span className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10">
                  <Paragraph label="Compte" color="lightWhite" />
                  <BiLinkExternal color="#ffffffe6" size="1.4rem" />
                </span>
              </a>
              <Link to="#" className="py-3 pr-2 pl-2 rounded hover:bg-white/10">
                {' '}
                <Paragraph label="Profil" color="lightWhite" />
              </Link>
              <a href="https://www.spotify.com/fr/premium/">
                <span className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10">
                  <Paragraph label="Passer à Premium" color="lightWhite" />
                  <BiLinkExternal color="#ffffffe6" size="1.4rem" />
                </span>
              </a>
              <button className="py-3 pr-2 pl-2 rounded hover:bg-white/10 text-left">
                {' '}
                <Paragraph label="Déconnexion" color="lightWhite" />
              </button>
            </div>
          </RenderIf>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
