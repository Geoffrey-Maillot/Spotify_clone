import { useState } from 'react';

// Import Router
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Import Component
import RenderIf from '../UtilsComponents/RenderIf';
import Paragraph from '../Typo/Paragraph/Paragraph';

// Import Icon
import { BsCheckLg } from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BsListUl } from 'react-icons/bs';
import { IoGridOutline } from 'react-icons/io5';

export enum PageLayout {
  List = 'list',
  Grid = 'grid',
}

interface Props {
  artist: string;
  pageLayout: PageLayout;
  setPageLayout: React.Dispatch<React.SetStateAction<PageLayout>>;
}

// == Component =>
const DiscographyHeader = ({ artist, pageLayout, setPageLayout }: Props) => {
  const [popupButtonsNavisOpen, togglePopupButtonsNavisOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const arrayPath = location.pathname.split('/');
  const path = arrayPath[arrayPath.length - 1];

  const buttonValues: Record<string, string> = {
    all: 'Tous',
    album: 'Albums',
    single: 'Singles et EP',
    compilation: 'Compiles',
  };

  const openClosePopupButtonNav = () => {
    togglePopupButtonsNavisOpen(
      (popupButtonsNavisOpen) => !popupButtonsNavisOpen
    );
  };

  const applyPageLayoutList = () => {
    setPageLayout(PageLayout.List);
    localStorage.setItem('pageLayout', PageLayout.List);
  };

  const applyPageLayoutGrid = () => {
    setPageLayout(PageLayout.Grid);
    localStorage.setItem('pageLayout', PageLayout.Grid);
  };

  const onNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const { name } = e.currentTarget as HTMLButtonElement;
    const tempPath = arrayPath;
    tempPath.splice(-1, 1, name);
    const newPath = tempPath.join('/');
    togglePopupButtonsNavisOpen(false);
    navigate(newPath);
  };

  return (
    <header className="px-8 py-2 h-20 flex items-start justify-between flex-col md:flex-row md:items-center md:h-10 bg-dark-50 sticky inset-x-0 top-[4.25rem] z-10">
      <Link
        className="font-circularBold text-2xl text-white hover:underline line-clamp"
        to="/artist/fsfe1"
        style={{ WebkitLineClamp: 1 }}
      >
        {artist}
      </Link>
      <div>
        <div className="relative flex items-center justify-center gap-3">
          <button
            className="px-4 py-2 h-8 rounded bg-dark-250 font-circularBook text-gray-200 text-lg hover:text-white flex items-center justify-start group cursor-default"
            onClick={openClosePopupButtonNav}
          >
            {buttonValues[path]}
            <span className={`${popupButtonsNavisOpen && 'rotate-180 '}`}>
              <RiArrowDownSFill
                className="text-gray-200 group-hover:text-white"
                size="1.4rem"
              />
            </span>
          </button>
          <button
            onClick={applyPageLayoutList}
            className={`w-8 h-8 rounded-full  ${
              pageLayout === PageLayout.List ? 'bg-dark-250' : 'bg-transparent'
            } bg-tranparent hover:bg-dark-250 flex items-center justify-center`}
          >
            <BsListUl
              color={pageLayout === PageLayout.List ? '#fff' : '#b3b3b3'}
            />
          </button>
          <button
            onClick={applyPageLayoutGrid}
            className={`w-8 h-8 rounded-full bg-tranparent hover:bg-dark-250 flex items-center justify-center ${
              pageLayout === PageLayout.Grid ? 'bg-dark-250' : 'bg-transparent'
            } `}
          >
            <IoGridOutline
              color={pageLayout === PageLayout.Grid ? '#fff' : '#b3b3b3'}
            />
          </button>
          <RenderIf bool={popupButtonsNavisOpen}>
            <div className=" z-50 w-40 absolute bg-dark-250 rounded p-1 flex flex-col left-0 top-[calc(100%_+_0.5rem)]">
              <button
                name="all"
                onClick={onNavigate}
                className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10"
              >
                <Paragraph label="Tout" size="lg" color="lightWhite" />
                <RenderIf bool={path === 'all'}>
                  <BsCheckLg color="#ffffffe6" size="1rem" />
                </RenderIf>
              </button>
              <button
                name="album"
                onClick={onNavigate}
                className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10"
              >
                <Paragraph label="Albums" size="lg" color="lightWhite" />
                <RenderIf bool={path === 'album'}>
                  <BsCheckLg color="#ffffffe6" size="1rem" />
                </RenderIf>
              </button>
              <button
                name="single"
                onClick={onNavigate}
                className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10"
              >
                <Paragraph label="Singles et EP" size="lg" color="lightWhite" />
                <RenderIf bool={path === 'single'}>
                  <BsCheckLg color="#ffffffe6" size="1rem" />
                </RenderIf>
              </button>
              <button
                name="compilation"
                onClick={onNavigate}
                className="flex items-center justify-between py-3 pr-2 pl-2 rounded hover:bg-white/10"
              >
                <Paragraph label="Compiles" size="lg" color="lightWhite" />
                <RenderIf bool={path === 'compilation'}>
                  <BsCheckLg color="#ffffffe6" size="1rem" />
                </RenderIf>
              </button>
            </div>
          </RenderIf>
        </div>
      </div>
    </header>
  );
};

export default DiscographyHeader;
