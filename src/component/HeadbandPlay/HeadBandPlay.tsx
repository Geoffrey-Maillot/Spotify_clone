import { useRef } from 'react';

// Import icon
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

// Import Component
import ButtonPlay from '../Button/ButtonPlay/ButtonPlay';
import H2 from '../Typo/H2/H2';
import RenderIf from '../UtilsComponents/RenderIf';
import OptionPanelList from './OptionPanelList';

// Import Component PrimeReact
import { OverlayPanel } from 'primereact/overlaypanel';

interface Props {
  type: 'playlist' | 'artist' | 'podcast';
  subscriber?: boolean;
}

// == Component =>
const HeadBandPlay = ({ type = 'playlist', subscriber }: Props) => {
  const showOptionPanel = (e: React.MouseEvent) => {
    if (optionPanel.current) {
      optionPanel.current.toggle(e);
    }
  };

  const optionPanel = useRef<OverlayPanel>(null);

  // Return =>
  return (
    <div className="px-8  py-6 flex items-center gap-8">
      <RenderIf bool={type === 'artist' || type === 'playlist'}>
        <ButtonPlay size="large" />
      </RenderIf>
      <RenderIf bool={type === 'artist' || type === 'podcast'}>
        <button className=" py-2 px-4 h-9 rounded border-gray-500 hover:border-white border uppercase">
          <H2 label={subscriber ? 'Abonné' : 'S\'abonné'} size="sm" />
        </button>
      </RenderIf>
      <div className="relative">
        <button onClick={(e) => showOptionPanel(e)}>
          <IoEllipsisHorizontalSharp
            size="1.8rem"
            className="text-gray-500 hover:text-white"
          />
        </button>
        <OverlayPanel ref={optionPanel} className="absolute w-60" dismissable>
          <OptionPanelList />
        </OverlayPanel>
      </div>
    </div>
  );
};

export default HeadBandPlay;
