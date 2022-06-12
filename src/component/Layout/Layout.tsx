//Import Component
import LeftMenu from '../LeftMenu/LeftMenu';
import Footer from '../Footer/Footer';

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => (
  <>
    <div className="">
      <LeftMenu />
      <main className="ml-80 min-h-[calc(100vh_-_5.625rem)]">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
