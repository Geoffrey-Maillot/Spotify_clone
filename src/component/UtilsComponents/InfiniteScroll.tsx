import { useRef, useEffect } from 'react';

interface InfiniteScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  trigger: Function;
  hasNextPage?: boolean;
  grid?: boolean;
}

const InfiniteScroll = ({
  children,
  className,
  trigger,
  hasNextPage,
  grid,
}: InfiniteScrollWrapperProps) => {
  // Retourne true quand le scroll arrive en bas
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

  // Si au chargement la première page rentre dans l'élément et qu'il y a une seconde page, on la charge tous de suite
  useEffect(() => {
    if (wrapper.current) {
      if (
        wrapper.current?.clientHeight === wrapper.current.scrollHeight &&
        hasNextPage
      ) {
        trigger();
      }
    }
  });

  const onScroll = (): void => {
    console.log(scrollIsOnBottom);
    if (scrollIsOnBottom() && hasNextPage) trigger();
  };

  console.log(children);

  const wrapper = useRef<HTMLUListElement>(null);

  const gridClassName =
    'grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))] place-items-center gap-6 py-4';

  return (
    <ul
      onScroll={onScroll}
      className={`${className} ${grid && gridClassName}`}
      ref={wrapper}
    >
      {children}
    </ul>
  );
};

export default InfiniteScroll;
