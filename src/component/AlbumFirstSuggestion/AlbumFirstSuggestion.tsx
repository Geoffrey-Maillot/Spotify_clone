// Import Component
import H2 from '../Typo/H2/H2';
import CardLastListen from '../Cards/CardLastListen';

interface Props {
  listAlbum: Array<{ title: string; img: string }>;
}

const AlbumFirstSuggestion = ({ listAlbum }: Props) => {
  return (
    <>
      <H2 label="Bonsoir" size="xl3" />
      <div className="grid gap-x-6 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(max(270px,25%),_1fr))] mb-4">
        {listAlbum.map((album) => (
          <CardLastListen title={album.title} img={album.img} />
        ))}
      </div>
    </>
  );
};
export default AlbumFirstSuggestion;
