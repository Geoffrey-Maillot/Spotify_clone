import { useState, useEffect } from 'react';

//Import Component
import HeaderNav from '../HeaderNav/HeaderNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../PlayBar/PlayBar';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [panelSize, setPanelSize] = useState(320);
  const [resizeIsActive, setResizeIsActive] = useState(false);

  const onReziseStart = (e: React.MouseEvent): void => {
    setResizeIsActive(true);
  };

  useEffect(() => {
    const panelSizeFromStorage: string | null =
      localStorage.getItem('panelSize');
    console.log(panelSizeFromStorage);
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
      console.log(panelSize);

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
      className={`grid grid-cols-[var(--leftMenuWidth)_1fr] grid-rows-[1fr_5.625rem] select-none transition ${
        resizeIsActive && 'cursor-col-resize'
      }`}
      style={{ ['--leftMenuWidth' as any]: `${panelSize}px` }}
    >
      <LeftMenu />
      <main className="relative bg-dark-100  max-h-[calc(100vh_-_5.625rem)] overflow-auto  scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-100">
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
        <HeaderNav />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
