// Import Router
import { Link, Navigate, useParams } from 'react-router-dom';

// Import Component
import Layout from 'component/Layout/Layout';
import H1 from 'component/Typo/H1/H1';
import H2 from 'component/Typo/H2/H2';
import Paragraph from 'component/Typo/Paragraph/Paragraph';
import PanelHideContent from 'component/UtilsComponents/PanelHideContent';
import HeaderBandPlay from 'component/HeaderBandPlay/HeaderBandPlay';


// Import icon
import { GoPrimitiveDot } from 'react-icons/go';


// Hook
import { useGetWindowWidth } from 'service/hook/useGetWindowWidth';

// Import interface
import { useGetEpisode } from 'service/spotify/episode';
import { milisecondToMinOrHour } from 'service/utils/time';
import Spinner from 'component/Spinner/Spinner';

const Episode = () => {
  const windowWidth = useGetWindowWidth();

  const isBackgroundImage = windowWidth < 781;

  const id = useParams().id as string;
  const { data, isLoading, isError } = useGetEpisode(id);

  const imgShow = data?.images.at(0);

  const bgStyle = {
    backgroundImage: isBackgroundImage ? `url(${imgShow?.url})` : '',
  };

  if (isError) {
  return <Navigate to="/login" />
}

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header
            className="h-[22rem] w-full px-8 pb-6  bg-cover bg-center bg-no-repeat flex flex-row gap-4 items-end justify-start"
            style={bgStyle}
          >
            <div className="w-[12.5rem] md:w-[14.68rem] xl:w-[20rem] aspect-square hidden md:block flex-none">
              <img src={imgShow?.url} alt={data?.name} />
            </div>
            <div className="flex flex-col justify-end items-start md:bg-dark-400/0 bg-dark-400/40  rounded p-2">
              <span className="mb-4">
                <H2 label="Épisode Podcast" />
              </span>
              <H1 label={data?.name} />
              <span className="mt-4">
                <H2 size="xl2" color="white" label={data?.show.name} />
              </span>
            </div>
          </header>
          <section className="px-10 pt-8 flex items-center justify-start gap-1">
            <Paragraph label="27 juin" />
            <GoPrimitiveDot color="#b3b3b3" size=".4rem" />
            <Paragraph label={milisecondToMinOrHour(data?.duration_ms)} />
          </section>
          <HeaderBandPlay type="episode" />
          <section className="max-w-[42rem] pl-8 pr-4 mt-4 flex flex-col items-start justify-start gap-8">
            <H2 size="xl2" label="Description de l'épisode" />
            <PanelHideContent>
              <Paragraph size="lg">{data?.description}</Paragraph>
            </PanelHideContent>
            <Link
              className="border border-gray-200  rounded-full px-4 py-2 hover:scale-105"
              to={`/show/${data?.show.id}`}
            >
                <H2 label="Voir tous les épisodes" />
      
            </Link>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Episode;
