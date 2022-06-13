// Import Component
import Layout from '../component/Layout/Layout';
import HeaderNav from '../component/HeaderNav/HeaderNav';
import AlbumFirstSuggestion from '../component/AlbumFirstSuggestion/AlbumFirstSuggestion';
import RowList from '../component/RowList/RowList';

const Home = () => (
  <Layout>
    <main className="bg-dark-100 ">
      <HeaderNav />
      <div className="px-8 pt-6 grid gap-6 ">
        <AlbumFirstSuggestion />
        <RowList
          title="Nouveautés tendance"
          subTitle="Des playlists rassemblant toutes les dernières nouveautés"
        />
      </div>
    </main>
  </Layout>
);

export default Home;
