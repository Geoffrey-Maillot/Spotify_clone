import {
  useState,
  useRef,
  useEffect,
  lazy,
  Suspense,
  useCallback,
} from 'react';

// State
import { useStores } from '../../state/storeContext';

// Import Router
import { useLocation, Link } from 'react-router-dom';

// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import RenderIf from '../UtilsComponents/RenderIf';
import ButtonMenuleft from './ButtonMenuLeft';
import NavLink from './NavLink';
import Search from '../SearchInput/SearchInput';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// Import React Icon
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { RiArrowDownSFill } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { BsSpotify } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

// Import Component PrimeReact
import { OverlayPanel } from 'primereact/overlaypanel';
import { observer } from 'mobx-react-lite';

// Lazy Components
const SearchDialog = lazy(() => import('../Dialogs/SearchDialog'));

interface Props {
  panelSize: number;
  togglePanelLeft: () => void;
}
//Todo: Background transparent quand scoll est en haut puis change de couleur quand on scoll avec une opacité en fonction de la distance du haut de la fenêtre
//Todo: Disable les boutons de nav si il n'y a pas de nav (voir su spotify)
//Todo: Supprimer les sugestions de l'input search

const HeaderNav = observer(({ panelSize, togglePanelLeft }: Props) => {
  const { authStore, popupsStore } = useStores();
  const navLinkNames: Record<string, string> = {
    playlists: 'Playlists',
    podcasts: 'Podcasts',
    artists: 'Artistes',
    albums: 'Albums',
  };
  const path = useLocation().pathname;
  const navLinkName: string = path.split('/')[2];
  const navLinksIsActive = !!navLinkNames[navLinkName];
  const [headerWidth, setheaderWidth] = useState<number>(0);
  const windowWidth = useGetWindowWidth();

  const showPopupAccount = (e: React.MouseEvent) => {
    if (chevronIconAccount.current) {
      const transform = chevronIconAccount.current.style.transform;

      transform === ''
        ? (chevronIconAccount.current.style.transform = 'rotate(180deg)')
        : (chevronIconAccount.current.style.transform = '');
    }

    if (popupAccount.current) {
      popupAccount.current.toggle(e);
    }
  };

  const showPopupNavLink = (e: React.MouseEvent) => {
    if (chevronIconNavLink.current) {
      const transform = chevronIconNavLink.current.style.transform;

      transform === ''
        ? (chevronIconNavLink.current.style.transform = 'rotate(180deg)')
        : (chevronIconNavLink.current.style.transform = '');
    }

    if (popupNavLink.current) {
      popupNavLink.current.toggle(e);
    }
  };
  const chevronIconAccount = useRef<HTMLSpanElement>(null);
  const chevronIconNavLink = useRef<HTMLSpanElement>(null);
  const popupAccount = useRef<OverlayPanel>(null);
  const popupNavLink = useRef<OverlayPanel>(null);
  const header = useRef<HTMLHeadElement | null>(null);

  useEffect(() => {
    if (header.current) {
      setheaderWidth(header.current?.clientWidth);
    }
  }, [windowWidth, panelSize]);

  const logoutFromSpotify = () => {
    const url = 'https://www.spotify.com/logout/';
    const spotifyLogoutWindow = window.open(
      url,
      'Spotify Logout',
      'popup=true'
    );
    setTimeout(
      () => !!spotifyLogoutWindow && spotifyLogoutWindow.close(),
      2000
    );
  };

  const deconnexion = () => {
    authStore.deconnexion();
    logoutFromSpotify();
  };

  const toggleSearchDialog = useCallback(() => {
    popupsStore.toggleSearchInput();
  }, [popupsStore]);

  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
        <SearchDialog
          isOpen={popupsStore.searchInputIsOpen}
          onHide={popupsStore.toggleSearchInput}
        />
      </Suspense>
      <header
        ref={header}
        className="flex items-center content-start bg-dark-200 pl-8 pr-12 h-[4.25rem] py-4 gap-4 sticky z-50 top-0 left-0 right-0"
      >
        <ButtonMenuleft togglePanelLeft={togglePanelLeft} />

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
        <RenderIf bool={navLinksIsActive}>
          <ul className="flex items-center content-center gap-2">
            <RenderIf bool={headerWidth > 440}>
              <li>
                <NavLink to="/collection/playlists" label="Playlists" />
              </li>
            </RenderIf>
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
                  onClick={showPopupNavLink}
                  className="flex justify-center items-center gap-2 bg-white/10 px-4 py-2 rounded"
                >
                  {' '}
                  <H2
                    label={navLinkNames[navLinkName]}
                    size="sm"
                    color="white"
                  />
                  <span ref={chevronIconAccount}>
                    <RiArrowDownSFill color="white" size="1.4rem" />
                  </span>
                </button>
                <OverlayPanel ref={popupNavLink} className="absolute">
                  <ul className="w-40 p-1 rounded flex flex-col justify-start items-start bg-dark-250">
                    <RenderIf bool={headerWidth < 440}>
                      <li className="w-full">
                        <NavLink
                          to="/collection/playlists"
                          color="blue"
                          label="Playlists"
                          type="Secondary"
                        />
                      </li>
                    </RenderIf>
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
                  </ul>
                </OverlayPanel>
              </div>
            </RenderIf>
          </ul>
        </RenderIf>
        <RenderIf bool={path === '/search'}>
          {windowWidth > 640 ? (
            <Search />
          ) : (
            <button onClick={toggleSearchDialog}>
              <RiSearchLine color="#fff" size="2rem" />
            </button>
          )}
        </RenderIf>
        <div className="ml-auto flex items-center justify-center gap-7">
          <RenderIf bool={path === '/'}>
            {windowWidth > 640 ? (
              <a
                className=" block bg-transparent border border-solid border-gray-500 rounded-full hover:scale-[1.04] hover:bg-dark-400 hover:border-white transition py-2 px-4"
                href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
              >
                <H2 label="S'abonner" color="white" size="sm" />
              </a>
            ) : (
              <a href="https://www.spotify.com/fr/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade">
                <BsSpotify color="#fff" size="2rem" />
              </a>
            )}
          </RenderIf>
          <div className="relative flex-none">
            <button
              className="flex items-center justify-center gap-2 p-1 rounded-full bg-dark-400 hover:bg-dark-50"
              onClick={showPopupAccount}
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
                <span ref={chevronIconAccount}>
                  <RiArrowDownSFill color="white" size="1.4rem" />
                </span>
              </span>
            </button>
            <OverlayPanel ref={popupAccount} className="absolute, ">
              <div className="  w-[12.25rem] bg-dark-250 rounded p-1 flex flex-col  ">
                <a href="/">
                  <span className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10">
                    <Paragraph label="Compte" color="lightWhite" />
                    <BiLinkExternal color="#ffffffe6" size="1.4rem" />
                  </span>
                </a>
                <Link
                  to="/user/idProfil"
                  className="py-3 pr-2 pl-2 rounded hover:bg-white/10"
                >
                  {' '}
                  <Paragraph label="Profil" color="lightWhite" />
                </Link>
                <a href="https://www.spotify.com/fr/premium/">
                  <span className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10">
                    <Paragraph label="Passer à Premium" color="lightWhite" />
                    <BiLinkExternal color="#ffffffe6" size="1.4rem" />
                  </span>
                </a>
                <button
                  onClick={deconnexion}
                  className="py-3 pr-2 pl-2 rounded hover:bg-white/10 text-left"
                >
                  {' '}
                  <Paragraph label="Déconnexion" color="lightWhite" />
                </button>
              </div>
            </OverlayPanel>
          </div>
        </div>
      </header>
    </>
  );
});

export default HeaderNav;
