// Import Router
import { Link, Navigate, useParams } from 'react-router-dom';

// Import Component
import Layout from '../component/Layout/Layout';
import H1 from '../component/Typo/H1/H1';
import H2 from '../component/Typo/H2/H2';
import Paragraph from '../component/Typo/Paragraph/Paragraph';
import HeaderBandPlay from '../component/HeaderBandPlay/HeaderBandPlay';
import TabsView from '../component/TabView/TabView';

// Import Icon
import { HiBadgeCheck } from 'react-icons/hi';
import TableArtist from '../component/Tables/TableArtist';
import AlbumList from '../component/AlbumList/AlbumList';
import {
  useGetArtist,
  useGetArtistAlbum,
  useGetArtistTopTracks,

} from '../service/spotify/artist';
import { useGetWindowWidth } from 'service/hook/useGetWindowWidth';
import {
  useAddToLikedTracks,
  useCheckTracksAreAlreadySaved,
  useRemoveFromLikedTracks,
} from 'service/spotify/track';
import { flatAndMergeArray } from 'service/utils/arrayFunctions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFollowArtists, useIsFollowingArtists, useUnfollowArtists } from '../service/spotify/follow';

// React Query

const Artist = () => {
  const id = useParams().id as string;

  const queryClient = useQueryClient();

  const windowWidth = useGetWindowWidth();

  const isBackgroundImage = windowWidth < 781;

  const {
    data: artistsData,
    isLoading: isLoadinArtist,
    isError: isErrorArtist,
  } = useGetArtist(id);

  const {
    data: dataTopTracks,
    isLoading: isLoadingTopTrack,
    isError: isErrorTopTracks,
  } = useGetArtistTopTracks(id, 'fr');

  const { data: isFollowingArtists } = useIsFollowingArtists([id]);

  const listTopTracks: SpotifyApi.TrackObjectFull[] =
    dataTopTracks?.tracks || [];

  const listIdtracks = listTopTracks.map((track) => track.id);

  const checkIfTracksIsLiked = useCheckTracksAreAlreadySaved([listIdtracks]);

  const listTracksLikedOrNot = checkIfTracksIsLiked.map(
    (response) => response.data
  );

  const tracksIsLiked = flatAndMergeArray([listIdtracks], listTracksLikedOrNot);

  const addLikedTracksMutation = useMutation(useAddToLikedTracks, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tracksAreAlreadySaved']);
    },
  });

  const removeLikedTracksMutation = useMutation(useRemoveFromLikedTracks, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tracksAreAlreadySaved']);
    },
  });

  const followArtist = useMutation(useFollowArtists, {
    onSuccess: () => queryClient.invalidateQueries(['isFollowingArtist']),
  });

  const unFollowArtist = useMutation(useUnfollowArtists, {
  onSuccess: () => queryClient.invalidateQueries(['isFollowingArtist'])
})

  const mutateFollowingArtist = () => {


  if (!!isFollowingArtists?.at(0) ) {
  unFollowArtist.mutate([id])
} else {
  followArtist.mutate([id])
}
}

  const imgArtist = artistsData?.images[0].url;

  const bgStyle = {
    backgroundImage: isBackgroundImage ? `url(${imgArtist})` : '',
  };

  const { data: albumsArtist } = useGetArtistAlbum(id);
  console.log(albumsArtist);

  const albums = [
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
    {
      img: 'https://source.unsplash.com/random/302x302',
      title: 'Futur Hits',
      content: 'Les hits de demain sont déjà ici. Photo : Måneskin',
    },
  ];

  if (isErrorArtist || isErrorTopTracks) {
    <Navigate to="/login" />;
  }

  return (
    <Layout>
      <header
        className="h-[22rem] w-full  flex flex-row justify-start items-end gap-4 px-8 py-6 bg-cover bg-center bg-no-repeat"
        style={bgStyle}
      >
        <div className="w-[12.5rem] md:w-[14.68rem] xl:w-[20rem] aspect-square hidden md:block rounded-full overflow-hidden">
          <img src={imgArtist} alt={artistsData?.name} />
        </div>
        <div className="flex flex-col justify-end items-start">
          {/*<div className="mb-4 flex items-center justify-start gap-1">
            <HiBadgeCheck size="1.5rem" className="fill-[#3d91f4]" />
            <Paragraph label="Artiste vérifié" color="white" />
          </div>*/}
          <H1 label="Michael Jackson" size="xl8" />
          <span className="mt-4">
            <Paragraph
              size="lg"
              color="white"
              label="30496653 auditeurs par mois"
            />
          </span>
        </div>
      </header>
      <HeaderBandPlay type="artist" subscriber={isFollowingArtists?.at(0)} mutateFollowingArtist={mutateFollowingArtist}/>
      <section className="px-8 flex justify-start items-start flex-col xl:flex-row gap-10">
        <div className="w-full">
          <div className="mb-4">
            <H2 size="xl2" color="white" label="Populaires" />
          </div>
          <TableArtist
            tracksList={listTopTracks}
            isLoading={isLoadingTopTrack}
            tracksIsLiked={tracksIsLiked}
            addToLikedTracks={addLikedTracksMutation}
            removeToLikedTracks={removeLikedTracksMutation}
          />
        </div>
        <div className="max-w-80 flex-none">
          <H2 size="xl2" color="white" label="Sélection de l'artiste" />
          <div className="flex justify-start items-start gap-3 mt-4">
            <div className="w-[4.75rem] h-[4.75rem] hidden sm:block">
              <img
                src="https://i.scdn.co/image/ab67706c0000da84d6dc7779ffa596a3d73b4e35"
                alt="Mj"
              />
            </div>
            <Link
              to="/playlist/dzd4844z"
              className="flex items-start justify-start flex-col gap-1 bg-white/5 sm:bg-white/0 rounded-md p-3 cursor-auto "
            >
              <div className="bg-white rounded-full w-full p-0.5 flex items-center justify-start">
                <div className="w-6 h-6 mr-2 rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center"
                    src="https://i.scdn.co/image/ab6761610000f178a2a0b9e3448c1e702de9dc90"
                    alt="MJ"
                  />
                </div>
                <Paragraph label="The best of MJ" color="dark" />
              </div>
              <H2 className="hover:underline cursor-default" size="lg">
                Michael Jackson: Greatest Hits
              </H2>
              <Paragraph label="Playlist" />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-8 mt-10">
        <H2 size="xl2" color="white" label="Discographie" />
        <TabsView artistId={id} />
      </section>
      <section className="px-8 mt-10">
        <AlbumList
          title="Avec Michael Jackson"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Les fans aiment aussi"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Apparaît sur"
          albums={albums}
          link={`/section/fdf9854`}
        />
        <AlbumList
          title="Découvert sur"
          albums={albums}
          link={`/section/fdf9854`}
        />
      </section>
    </Layout>
  );
};

export default Artist;
