//Import Router
import { useParams } from "react-router-dom";

// Import Component
import Grid from "../../component/Grid/Grid";
import H2 from "../../component/Typo/H2/H2";
import CardMusic from "../../component/Cards/CardMusic";
import Layout from "../../component/Layout/Layout";

const Genre = () => {

const {idGenre} = useParams()


// == Component =>
const genreList = [
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
{
  img: 'https://i.scdn.co/image/ab67706f00000002e05f3d5279170c0130fa8cbf',
  title: 'Apéro !',
  content: 'La bande-son de votre apéro. A écoutez a jeun !'
},
]


return(
  <Layout >
   <section className="my-4 px-8 py-4">
        <H2 size="xl2"> Les playlist de votre été </H2>
        <Grid>
          {genreList.map((item, i) => (
            <CardMusic key={i} {...item} />
          ))}
        </Grid>
      </section>
</Layout>
)};

export default Genre;
