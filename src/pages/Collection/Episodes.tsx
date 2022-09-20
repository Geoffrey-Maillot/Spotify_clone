// Import Router

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';

// Import Component
import Layout from '../../component/Layout/Layout';
import H1 from '../../component/Typo/H1/H1';
import Paragraph from '../../component/Typo/Paragraph/Paragraph';
import H2 from '../../component/Typo/H2/H2';
import ButtonPlay from '../../component/Button/ButtonPlay/ButtonPlay';
import TableEpisodes from '../../component/Tables/TableEpisodes';

// Spotify
import { useGetMyEpisodes } from '../../service/spotify/episode';

const Episodes = () => {
  const { data, isLoading, isError } = useGetMyEpisodes();

  const episodesResponse = data?.pages.flat()[0].items;
  const episodeList = episodesResponse.map((episode: any) => episode.episode);
  console.log(episodeList);

  return (
    <Layout>
      <header
        className="h-[22rem] w-full flex flex-col justify-end items-start px-8 pb-6 ]"
        style={{
          background:
            'url(https://source.unsplash.com/random/1900x600) center center no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <span className="mb-4">
          <H2 label="PLAYLIST" />
        </span>
        <H1 label="Vos épisodes" />
        <div className="mt-4 flex items-center justify-start gap-1">
          <div className="w-6 h-6 rounded-full object-cover object-center overflow-hidden">
            <img
              src="https://source.unsplash.com/random/30x30"
              alt="Unsplash"
            />
          </div>
          <H2 size="lg" color="white" label="Geoffrey Maillot" />
          <GoPrimitiveDot color="white" size=".5rem" />
          <Paragraph label="2 épisodes" color="white" size="lg" />
        </div>
      </header>
      <div className="pt-8 pl-10 pb-4">
        <ButtonPlay size="large" />
      </div>
      <div className="max-w-[58.5rem]">
        <TableEpisodes episodesList={episodeList} />
      </div>
    </Layout>
  );
};

export default Episodes;
