import { useState, useEffect, useLayoutEffect, useRef } from 'react';

//Import Component
import HeaderNav from '../HeaderNav/HeaderNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../PlayBar/PlayBar';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [panelSize, setPanelSize] = useState(320);
  const [resizeIsActive, setResizeIsActive] = useState(false);
  const [menuLeftIsVisible, toggleMenuLeftIsVisible] = useState(true);
  const [responsiveLeftPanelIsActive, toggleResponsiveLeftPanelIsActive] =
    useState(false);
  const windowWidth = useGetWindowWidth();

  const containerPanelLeft = useRef<HTMLDivElement>(null);

  const togglePanelLeft = () => {
    containerPanelLeft.current?.classList.toggle('-translate-x-full');
  };

  useEffect(() => {
    if (windowWidth < 1024) {
      toggleMenuLeftIsVisible(false);
      toggleResponsiveLeftPanelIsActive(true);
    } else {
      toggleMenuLeftIsVisible(true);
      toggleResponsiveLeftPanelIsActive(false);
    }
  }, [windowWidth]);

  const onReziseStart = (e: React.MouseEvent): void => {
    setResizeIsActive(true);
  };

  useLayoutEffect(() => {
    const panelSizeFromStorage: string | null =
      localStorage.getItem('panelSize');
    if (panelSizeFromStorage) setPanelSize(+panelSizeFromStorage);
  }, []);

  useEffect(() => {
    const onResize = (e: MouseEvent): void => {
      if (resizeIsActive) {
        const x = e.clientX;

        if (x > 191 && x < 384) {
          setPanelSize(x);
        }
      }
    };

    const onReziseStop = (): void => {
      localStorage.setItem('panelSize', panelSize.toString());
      setResizeIsActive(false);
    };

    document.addEventListener('mousemove', onResize);
    document.addEventListener('mouseup', onReziseStop);

    return () => {
      document.removeEventListener('mousemove', onResize);
      document.removeEventListener('mouseup', onReziseStop);
    };
  }, [resizeIsActive, panelSize]);

  return (
    <>
      {responsiveLeftPanelIsActive && (
        <div
          ref={containerPanelLeft}
          className="fixed left-0 inset-y-0 w-1/2 min-w-sm min-w-max-content h-[calc(100vh_-_5.625rem)] z-50 bg-dark-400 -translate-x-full transition shadow-panel"
        >
          <LeftMenu />
        </div>
      )}
      <div
        className={`grid  grid-cols-1 lg:grid-cols-[var(--leftMenuWidth)_1fr] grid-rows-[1fr,_5.625rem] select-none transition ${
          resizeIsActive && 'cursor-col-resize'
        }`}
        style={{ ['--leftMenuWidth' as any]: `${panelSize}px` }}
      >
        {menuLeftIsVisible && <LeftMenu />}

        <main className=" relative bg-dark-100  h-[calc(100vh_-_5.625rem)] overflow-auto  scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-100">
          <div
            className="absolute h-full w-1 inset-y-0 left-0 cursor-col-resize bg-[#121212] "
            onMouseDown={(e) => onReziseStart(e)}
          >
            {' '}
            <input
              readOnly
              type="range"
              min={191}
              max={384}
              step={10}
              value={panelSize}
              className="absolute z-0opacity-0"
            />{' '}
          </div>
          <HeaderNav
            responsiveLeftPanelIsActive={responsiveLeftPanelIsActive}
            togglePanelLeft={togglePanelLeft}
            panelSize={panelSize}
          />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
