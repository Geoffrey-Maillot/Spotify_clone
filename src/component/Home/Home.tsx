import './home.scss';
import Paragraph from '../Paragraph/Paragraph';
import MenuLink from '../MenuLink/MenuLink';
const Home = () => {
  return (
    <section className=" w-full h-screen flex justify-center items-center flex-col gap-5">
      <Paragraph label="Test texte" size="lg" color="gray" />
      <MenuLink label="Acceuil" icon iconType="home" to="/" />
    </section>
  );
};

export default Home;
