import './home.scss';
import LeftMenu from '../LeftMenu/LeftMenu';
const Home = () => {
  return (
    <section className=" w-full h-screen flex justify-center items-center flex-col gap-5">
      <LeftMenu />
    </section>
  );
};

export default Home;
