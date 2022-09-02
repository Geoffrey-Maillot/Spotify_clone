import { useInView } from 'react-intersection-observer';

interface InfiniteScrollWrapperProps {
  children: React.ReactNode;
  trigger: Function;
  hasNextPage?: boolean;
}

const InfiniteScroll = ({
  children,
  trigger,
  hasNextPage,
}: InfiniteScrollWrapperProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
    trackVisibility: true,
  });

  if (inView && hasNextPage) trigger();

  return (
    <>
      {children}
      <button className='scale-0' ref={ref}>Load More</button> 
    </>
  );
};

export default InfiniteScroll;
