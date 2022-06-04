import './home.scss';

import CardMusic from '../Cards/CardMusic';
const Home = () => {
  return (
    <section className=" w-full h-screen bg-dark-100 flex justify-center items-center flex-col gap-5">
      <CardMusic />
    </section>
  );
};

export default Home;
