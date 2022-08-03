import { useState } from 'react';

// Import PrimeReact
import { TabView, TabPanel } from 'primereact/tabview';

// Import Component
import Albums from './Albums';
import Compiles from './Compiles';
import Singles from './Singles';
import Releases from './Releases';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';
import TitleHeader from './TitleHeader';

interface Props {
  artistId: string | undefined;
}

enum pathAlbumType {
  all = 'all',
  single = 'single',
  album = 'album',
  compilation = 'compilation',
}

const TabsView = ({ artistId }: Props) => {
  const isMobile = useGetWindowWidth() <= 640;
  const [selectedTab, setSelectedTab] = useState(0);
  const [titleHeaderListIsOpen, toggleTitleHeaderListIsOpen] = useState(false);

  const changeActiveIndex = (index: number) => {
    setSelectedTab(index);
  };

  const titlesHeader = [
    'Sorties populaire',
    'Albums',
    'Singles et EP',
    'Compiles',
  ];

  const toggleHeaderList = () =>
    toggleTitleHeaderListIsOpen(
      (titleHeaderListIsOpen) => !titleHeaderListIsOpen
    );

  const changeActivePanel = (index: number) => {
    setSelectedTab(index);
    toggleTitleHeaderListIsOpen(false);
  };

  const headerDesktop = (options: any) => {
    const isSelected = selectedTab === options.index;

    return (
      <div onClick={options.onClick}>
        <TitleHeader
          title={titlesHeader[options.index]}
          isActive={isSelected}
        />
      </div>
    );
  };

  const headerMobile = () => {
    return (
      <div className="relative ">
        <div onClick={toggleHeaderList}>
          <TitleHeader
            title={titlesHeader[selectedTab]}
            isActive
            isMenu
            isOpen={titleHeaderListIsOpen}
          />
        </div>
      </div>
    );
  };

  const ButtonListHeader = () => {
    return (
      <ul className="flex flex-col gap-3 absolute top-16 left-0 z-10 overflow-hidden animate-slideInTop ">
        {titlesHeader.map((title, i) => {
          if (i === selectedTab) return null;

          return (
            <li key={i} onClick={() => changeActivePanel(i)}>
              <TitleHeader title={title} />
            </li>
          );
        })}
      </ul>
    );
  };

  //Todo: Conditionner l'affichage des panels quand l'Api sera en place
  return (
    <div className="relative overflow-hidden">
      {/* Title Header List */}
      {titleHeaderListIsOpen && <ButtonListHeader />}

      {/* Tab View*/}
      <TabView
        activeIndex={selectedTab}
        className="mt-4 overflow-auto"
        onTabChange={(e) => changeActiveIndex(e.index)}
        scrollable
      >
        <TabPanel headerTemplate={isMobile ? headerMobile : headerDesktop}>
          <Releases artistId={artistId} path={pathAlbumType.all} />
        </TabPanel>
        <TabPanel headerTemplate={isMobile ? null : headerDesktop}>
          <Albums artistId={artistId} path={pathAlbumType.album} />
        </TabPanel>
        <TabPanel headerTemplate={isMobile ? null : headerDesktop}>
          <Singles artistId={artistId} path={pathAlbumType.single} />
        </TabPanel>
        <TabPanel headerTemplate={isMobile ? null : headerDesktop}>
          <Compiles artistId={artistId} path={pathAlbumType.compilation} />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default TabsView;
