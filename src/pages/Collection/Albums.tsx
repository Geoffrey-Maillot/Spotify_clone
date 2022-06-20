// Import component
import Layout from '../../component/Layout/Layout';
import HeaderNav from '../../component/HeaderNav/HeaderNav';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';

const playlist = [
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
  {
    img: 'https://i.scdn.co/image/ab67706f00000002ace305fec57431145ae4aca5',
    title: 'Futur Hits',
    content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
  },
];

// == Component =>
const Albums = () => (
  <Layout>

    <div className="px-8 pt-6">
      <section>
        <H2 size="xl2"> Albums </H2>
        <Grid>
          {playlist.map((item, i) => (
            <CardMusic key={i} {...item} />
          ))}
        </Grid>
      </section>
    </div>
  </Layout>
);

export default Albums;
