// Import Component
import H2 from '../Typo/H2/H2';
import CardLastListen from '../Cards/CardLastListen';

interface Props {
  listAlbum?: Array<{ title: string; img: string; id: string }>;
}

const AlbumFirstSuggestion = ({ listAlbum }: Props) => {
  return (
    <>
      <H2 label="Bonsoir" size="xl3" />
      <div className="grid gap-x-6 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(max(220px,25%),_1fr))] mb-4">
        {listAlbum &&
          listAlbum.map((album, i) => (
            <CardLastListen
              key={i}
              title={album.title}
              img={album.img}
              id={album.id}
            />
          ))}
      </div>
    </>
  );
};
export default AlbumFirstSuggestion;
