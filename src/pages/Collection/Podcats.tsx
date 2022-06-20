// Import component
import Layout from '../../component/Layout/Layout';
import HeaderNav from '../../component/HeaderNav/HeaderNav';
import H2 from '../../component/Typo/H2/H2';
import Grid from '../../component/Grid/Grid';
import CardMusic from '../../component/Cards/CardMusic';
import CardFirst from '../../component/Cards/CardFirst';

const podcasts = [
  {
    img: 'https://i.scdn.co/image/ab67656300005f1fae66dec7128ff876515bad3f',
    title: 'Nota Bene',
    content: 'Benjamin Brillaud',
  },
  {
    img: 'https://i.scdn.co/image/3bde9dfc10e81b1ec2a81241e0f0af59eff6d25c',
    title: 'PodDev',
    content: 'PodDev',
  },
  {
    img: 'https://i.scdn.co/image/741bc7e27fad189ef43327c427a5a225aa537b32',
    title: 'Codeur en seine',
    content: 'Codeurs en Seine',
  },
  {
    img: 'https://i.scdn.co/image/94b75e0bde5b38b5e11d1e7da5d9e1ea2bdf37be',
    title: 'Dev-mania',
    content: 'Loïc Perdreieau',
  },
  {
    img: 'https://i.scdn.co/image/cdea8b255637a849b10637dd3ec1c93f8414d23a',
    title: 'Artisan Développeur',
    content: 'Benoit Gantaume',
  },
];

// == Component =>
const Podcasts = () => (
  <Layout>
    <HeaderNav />
    <div className="px-8 pt-6">
      <section>
        <H2 size="xl2"> Podcasts </H2>
        <Grid>
          <CardFirst type="podcast" />
          {podcasts.map((item, i) => (
            <CardMusic key={i} {...item} />
          ))}
        </Grid>
      </section>
    </div>
  </Layout>
);

export default Podcasts;
