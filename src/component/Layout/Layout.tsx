//Import Component
import HeaderNav from '../HeaderNav/HeaderNav';
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../PlayBar/PlayBar';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => (
  <div
    className="grid grid-cols-[var(--leftMenuWidth)_1fr] grid-rows-[1fr_5.625rem] "
    style={{ ['--leftMenuWidth' as any]: '320px' }}
  >
    <LeftMenu />
    <main className="relative bg-dark-100  max-h-[calc(100vh_-_5.625rem)] overflow-auto  scrollbar scrollbar-thumb-dark-150 scrollbar-track-dark-100">
      <HeaderNav />
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
