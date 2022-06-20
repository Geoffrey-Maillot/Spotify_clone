// Import component
import Layout from '../component/Layout/Layout';
import HeaderNav from '../component/HeaderNav/HeaderNav';
import H2 from '../component/Typo/H2/H2';
import CardGender from '../component/Cards/CardGender';
import Carroussel from '../component/Carroussel/Carroussel';
import Grid from '../component/Grid/Grid';

const dataPreferGender = [
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large',
  },
  {
    title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large',
  },
];

const dataGender = [
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
  {
    title: 'Podcasts',
    img: 'https://source.unsplash.com/random/202x202',
    alt: 'Alt Image',
    color: '#7695e5',
    size: 'small',
  },
];

// == Component =>
const Search = () => (
  <Layout>
    <HeaderNav />
    <div className="px-8 pt-6 ">
      <section>
        <H2 size="xl2"> Vos genre préférés </H2>
        <Carroussel cards={dataPreferGender} />
      </section>
      <section className="my-4 py-4">
        <H2 size="xl2"> Parcourir tout </H2>
        <Grid>
          {dataGender.map((item, i) => (
            <CardGender key={i} {...item} />
          ))}
        </Grid>
      </section>
    </div>
  </Layout>
);

export default Search;
