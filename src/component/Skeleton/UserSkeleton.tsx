import ContentLoader from 'react-content-loader';

interface UserSkeletonProps {}

const UserSkeleton = (props: UserSkeletonProps) => (
  <ContentLoader
    speed={2}
    width={162.2}
    height={36}
    viewBox="0 0 162.2 36"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    className="bg-dark-400 rounded-full"
    {...props}
  >
    <circle cx="20" cy="18" r="14" />
    <rect x="40" y="10" rx="3" ry="3" width="110" height="16" />
  </ContentLoader>
);

export default UserSkeleton;
