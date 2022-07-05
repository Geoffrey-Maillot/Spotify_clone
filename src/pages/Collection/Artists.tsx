// Import component
import Layout from '../../component/Layout/Layout';
import HeaderNav from '../../component/HeaderNav/HeaderNav';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';

const podcasts = [
  {
    img: 'https://i.scdn.co/image/ab67616100005174c2f3c2db3aa6f86aa810f7d4',
    title: 'Nneka',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab6761610000517495a14413f9430851ec1941eb',
    title: 'Rousseau',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02976bcd0c353a3a85006080ac',
    title: 'Kaf malbar',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e02c817de6f6d4bf8f2d069f62a',
    title: 'Cassiya',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616d00001e021bb72304e120d4633ee16237',
    title: 'Ousanousava',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174a2a0b9e3448c1e702de9dc90',
    title: 'Mickael Jackson',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab676161000051745796c88846b0bbecb07fccfc',
    title: 'Skillet',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174ee20ac45eacc19a559507d67',
    title: 'Gentleman',
    content: 'Artiste',
  },
  {
    img: 'https://i.scdn.co/image/ab67616100005174fad69ba2257abfdd56eb9dec',
    title: "Jacob's Piano",
    content: 'Artiste',
  },
];

// == Component =>
const Artists = () => (
  <Layout>
    <div className="px-8 pt-6">
      <section>
        <H2 size="xl2"> Artistes </H2>
        <Grid>
          {podcasts.map((item, i) => (
            <CardMusic key={i} {...item} type={'artist'} />
          ))}
        </Grid>
      </section>
    </div>
  </Layout>
);

export default Artists;
