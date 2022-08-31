import { useRef } from 'react';

interface InfiniteScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  trigger: Function;
  hasNextPage?: boolean;
}

const InfiniteScroll = ({
  children,
  className,
  trigger,
  hasNextPage,
}: InfiniteScrollWrapperProps) => {
  const scrollIsOnBottom = (): boolean => {
    if (wrapper.current) {
      if (
        wrapper.current?.offsetHeight + wrapper.current?.scrollTop >=
        wrapper.current.scrollHeight
      ) {
        return true;
      }
    }
    return false;
  };

  const onScroll = () => {
    if (scrollIsOnBottom() && hasNextPage) trigger();
  };

  const wrapper = useRef<HTMLUListElement>(null);

  return (
    <ul onScroll={onScroll} className={className} ref={wrapper}>
      {children}
    </ul>
  );
};

export default InfiniteScroll;
