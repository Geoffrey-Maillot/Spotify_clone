// Import Router
import { useParams } from 'react-router-dom';

// Import icon
import { GoPrimitiveDot } from 'react-icons/go';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import H2 from '../component/Typo/H2/H2';
import TableTracks from '../component/Tables/TableTracks';
import HeaderBandPlay from '../component/HeaderBandPlay/HeaderBandPlay';

// Spotify
import {
  useGetPlaylist,
  useGetPlaylistCoverImage,
  useGetPlaylistTracks,
} from '../service/spotify/playlist';

// == Component =>
const Playlist = () => {
  const id = useParams().id as string;

  const {
    data: dataPlaylist,
    error: errorPlaylist,
    isLoading: isLoadingPlaylist,
  } = useGetPlaylist(id);
  const {
    data: dataCoverImage,
    error: errorCoverImage,
    isLoading: isLoadingCoverImage,
  } = useGetPlaylistCoverImage(id);
  const {
    data: dataTracks,
    error: errorTracks,
    isLoading: isLoadingTracks,
    fetchNextPage: fetchNextPageTracks,
    hasNextPage: hasNextPageTracks,
  } = useGetPlaylistTracks(id);

  console.log('dataPlaylist : ', dataPlaylist);
  console.log('dataCoverImage : ', dataCoverImage);
  console.log('dataTracks : ', dataTracks);

  let tracksList: Array<SpotifyApi.PlaylistTrackObject> = [];

  dataTracks?.pages.flat().forEach((track) => {
    tracksList = [...tracksList, ...track.items]
})


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
        <H1 label="Futur Hits" />
        <span className="mt-4">
          <Paragraph
            size="lg"
            color="lightWhite"
            label="Les hit de demain sont déjà ici. Photo : Ckay"
          />
        </span>
        <div className="flex justify-start items-center mt-4">
          <span>
            <Paragraph label="Spotify" color="white" />
          </span>{' '}
          <span>
            <GoPrimitiveDot size=".6rem" color="#fff" />
          </span>
          <span>
            <Paragraph color="white" label="147 658 like" />
          </span>
          <span>
            <GoPrimitiveDot size=".6rem" color="#b3b3b3" />
          </span>
          <span>
            <Paragraph color="white" label="50 titres, " />
          </span>
          <span className="ml-1">
            <Paragraph color="lightWhite" label=" 2 h 27min" />
          </span>
        </div>
      </header>
      <HeaderBandPlay type="playlist" />
      <TableTracks tracksList={tracksList} />
    </Layout>
  );
};

export default Playlist;
