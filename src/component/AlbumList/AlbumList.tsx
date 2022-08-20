import { useState, useEffect, useRef } from 'react';

// Import Router
import { Link } from 'react-router-dom';

// Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// Utils
import { calcGridNbrCols } from '../../service/utils/calcGridNbrCols';

// Import Component
import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import RenderIf from '../UtilsComponents/RenderIf';
import CardMusic from '../Cards/CardMusic';

// Interface
import { Album } from '../../service/interface/Album';

interface Props {
  title?: string;
  subTitle?: string;
  albums: Array<Album>;
  link: string;
}
// == Component =>
const AlbumList = ({ title, subTitle, albums, link }: Props) => {
  const [nbrCols, setNbrCols] = useState(0);
  const windowWidth = useGetWindowWidth();

  const albumList = useRef<HTMLDivElement>(null);

  const listSlice = albums.slice(0, nbrCols);

  useEffect(() => {
    if (albumList.current) {
      setNbrCols(calcGridNbrCols(albumList.current.clientWidth));
    }
  }, [windowWidth]);

  return (
    <div className="my-4" ref={albumList}>
      <div className="flex items-center flex-wrap gap-2 justify-start pb-4 pt-1">
        <div className="grow">
          <RenderIf bool={!!title}>
            <H2 label={title} size="xl2" />
          </RenderIf>
          <RenderIf bool={!!subTitle}>
            <Paragraph label={subTitle} />
          </RenderIf>
        </div>
        {/* "Voir tous" ne dois apparaitre que si le nombre d'element à afficher est supérieur au nombre affiché */}
        <Link
          to={`${link}`}
          className="ml-4 hover:underline text-gray-200  text-xs sm:text-sm ml-auto  font-circularBold uppercase tracking-wide"
        >
          Voir Tous
        </Link>
      </div>
      <div
        className={`grid grid-cols-[repeat(var(--cols),_minmax(0,_1fr))]  gap-6 `}
        style={{ ['--cols' as any]: nbrCols }}
      >
        {listSlice.map((card, i) => (
          <CardMusic key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
