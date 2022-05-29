import './home.scss';
import logo from './logo.svg';

const Home = () => {
  return (
    <section className=" bg-teal-900 w-full h-screen flex justify-center items-center flex-col gap-5">
      <img src={logo} className="logo w-1/4" alt="logo" />
      <p className="text-3xl text-white">Binevenue sur React</p>
      <a
        className="text-2xl text-blue-700"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </section>
  );
};

export default Home;
