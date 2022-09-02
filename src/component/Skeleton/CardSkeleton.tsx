import ContentLoader from 'react-content-loader';
import Grid from '../Grid/Grid';

const Card = () => (
  <div className="w-full max-w-xs block rounded-md p-5 bg-white/5 hover:bg-white/20 text-left group transition ease-in-out duration-300  aspect-[0.72] ">
    <div className="w-full rounded-md aspect-square relative overflow-hidden">
      <div className="w-full h-full bg-dark-350 rounded shadow-2xl flex justify-center items-center ">
        <svg
          role="img"
          height="64"
          width="64"
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="fill-gray-250"
        >
          <path d="M7 3h14v15.167a3.5 3.5 0 11-3.5-3.5H19V5H9v13.167a3.5 3.5 0 11-3.5-3.5H7V3zm0 13.667H5.5a1.5 1.5 0 101.5 1.5v-1.5zm12 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path>
        </svg>
      </div>
    </div>
    <ContentLoader
      speed={2}
      width={162.2}
      height={60}
      viewBox="0 0 162.2 60"
      backgroundColor="#cbcbcb"
      foregroundColor="#fff"
    >
      <rect x="0" y="16" rx="3" ry="3" width="140" height="20" />
      <rect x="0" y="44" rx="3" ry="3" width="110" height="16" />
    </ContentLoader>
  </div>
);

const CardSkeleton = () => {
  return (
    <Grid>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </Grid>
  );
};

export default CardSkeleton;
