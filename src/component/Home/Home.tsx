import './home.scss';

import HeaderNav from '../HeaderNav/HeaderNav';
import NavLink from '../HeaderNav/NavLink';
const Home = () => {
  return (
    <section className=" w-full h-screen bg-dark-100">
      <HeaderNav />
      <NavLink to="/" label="Playlist" />
    </section>
  );
};

export default Home;
