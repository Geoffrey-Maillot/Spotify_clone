import { useState } from 'react';

// Import PrimeReact
import { TabView, TabPanel } from 'primereact/tabview';

// Import Component
import Albums from './Albums';
import Compiles from './Compiles';
import Singles from './Singles';
import Releases from './Releases';

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
  const [selectedTab, setSelectedTab] = useState(0);

  const changeActiveIndex = (index: number) => {
    setSelectedTab(index);
  };

  const titlesHeader = [
    'Sorties populaire',
    'Albums',
    'Singles et EP',
    'Compiles',
  ];

  const headerTemplate = (options: any) => {
    const isSelected = selectedTab === options.index;

    return (
      <div
        onClick={options.onClick}
        className={`${
          isSelected
            ? 'bg-white text-dark-400'
            : 'bg-[#232323] hover:bg-[#2a2a2a] active:bg-[#1b1b1b] text-white'
        } px-3 py-2 rounded-full text-sm font-circularBook w-max`}
      >
        {titlesHeader[options.index]}
      </div>
    );
  };

  //Todo: Conditionner l'affichage des panels quand l'Api sera en place
  return (
    <TabView
      activeIndex={selectedTab}
      className="mt-4"
      onTabChange={(e) => changeActiveIndex(e.index)}
    >
      <TabPanel headerTemplate={headerTemplate}>
        <Releases artistId={artistId} path={pathAlbumType.all} />
      </TabPanel>
      <TabPanel headerTemplate={headerTemplate}>
        <Albums artistId={artistId} path={pathAlbumType.album} />
      </TabPanel>
      <TabPanel headerTemplate={headerTemplate}>
        <Singles artistId={artistId} path={pathAlbumType.single} />
      </TabPanel>
      <TabPanel headerTemplate={headerTemplate}>
        <Compiles artistId={artistId} path={pathAlbumType.compilation} />
      </TabPanel>
    </TabView>
  );
};

export default TabsView;
