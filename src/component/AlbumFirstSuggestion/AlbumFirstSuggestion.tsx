// Import Component
import H2 from '../Typo/H2/H2';
import CardLastListen from '../Cards/CardLastListen';

const AlbumFirstSuggestion = () => {
  return (
    <>
      <H2 label="Bonsoir" size="xl3" />
      <div className="grid gap-x-6 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(max(270px,25%),_1fr))] mb-4">
        <CardLastListen
          title="Summer Hit 2022"
          img="https://source.unsplash.com/random/101x101"
        />
        <CardLastListen
          title="Afro Nation 2022"
          img="https://source.unsplash.com/random/102x102"
        />
        <CardLastListen
          title="Zouk"
          img="https://source.unsplash.com/random/103x103"
        />
        <CardLastListen
          title="System of a Down"
          img="https://source.unsplash.com/random/104x104"
        />
        <CardLastListen
          title="This is Naza"
          img="https://source.unsplash.com/random/105x105"
        />
        <CardLastListen
          title="This is Admiral T"
          img="https://source.unsplash.com/random/106x106"
        />
      </div>
    </>
  );
};
export default AlbumFirstSuggestion;
