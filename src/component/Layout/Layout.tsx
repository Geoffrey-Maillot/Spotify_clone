import { useState, useEffect, useLayoutEffect, useRef } from 'react';

// Import MobX

//Import Component
import HeaderNav from '../HeaderNav/HeaderNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../PlayBar/PlayBar';

// Import Hook
import { observer } from 'mobx-react-lite';

interface Props {
  children: any;
}

const Layout = observer(({ children }: Props) => {
  const [panelSize, setPanelSize] = useState(320);
  const [resizeIsActive, setResizeIsActive] = useState(false);

  const leftMenu = useRef<HTMLDivElement>(null);

  const togglePanelLeft = () => {
    leftMenu.current?.classList.toggle('-left-[100%]');
    leftMenu.current?.classList.toggle('left-0');
  };

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
    <div
      className={`grid  grid-cols-1 lg:grid-cols-[var(--leftMenuWidth)_1fr] grid-rows-[1fr,_5.625rem] select-none transition ${
        resizeIsActive && 'cursor-col-resize'
      }`}
      style={{ ['--leftMenuWidth' as any]: `${panelSize}px` }}
    >
      <LeftMenu forwardRef={leftMenu} />

      <main className="relative bg-dark-100  h-[calc(100vh_-_5.625rem)] overflow-auto  scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-100">
        <div
          className="absolute z-50 h-full w-1 inset-y-0 left-0 cursor-col-resize bg-[#121212] "
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
            className="absolute z-0 opacity-0"
          />{' '}
        </div>
        <HeaderNav togglePanelLeft={togglePanelLeft} panelSize={panelSize} />
        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
