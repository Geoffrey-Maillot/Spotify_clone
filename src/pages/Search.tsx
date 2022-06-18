// Import component
import Layout from "../component/Layout/Layout";
import HeaderNav from '../component/HeaderNav/HeaderNav';
import H2 from "../component/Typo/H2/H2";
import CardGender from "../component/Cards/CardGender";
import Carroussel from "../component/Carroussel/Carroussel";

const dataGender = [
{
  title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large'
},
{
  title: 'Variété française',
    img: "https://source.unsplash.com/random/201x201",
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large'
},
{
  title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large'
},
{
  title: 'Variété française',
    img: 'https://source.unsplash.com/random/201x201',
    alt: 'Alt Image',
    color: '#7695c9',
    size: 'large'
},
]

// == Component =>
const Search = () => (
 <Layout >
  <HeaderNav />
    <div className="px-8 pt-6 ">

  <H2> Page Recherche </H2>
  <Carroussel >
    {dataGender.map((item, i) => (
  <CardGender key={i} {...item} />
    ))}
</Carroussel>
</div>
</Layout>
);

export default Search;
