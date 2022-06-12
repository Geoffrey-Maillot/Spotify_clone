// Import Component
import Layout from '../component/Layout/Layout';
import HeaderNav from '../component/HeaderNav/HeaderNav';
import AlbumFirstSuggestion from '../component/AlbumFirstSuggestion/AlbumFirstSuggestion';

const Home = () => (
  <Layout>
    <main className="bg-dark-100 ">
      <HeaderNav />
      <div className="px-8 pt-6 grid gap-6 ">
        <AlbumFirstSuggestion />
      </div>
    </main>
  </Layout>
);

export default Home;
