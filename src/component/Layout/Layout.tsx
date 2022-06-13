//Import Component
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => (
  <div
    className="grid grid-cols-[var(--leftMenuWidth)_1fr] grid-rows-[1fr_5.625rem]"
    style={{ ['--leftMenuWidth' as any]: '320px' }}
  >
    <LeftMenu />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
