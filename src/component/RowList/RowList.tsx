import H2 from '../Typo/H2/H2';
import Paragraph from '../Typo/Paragraph/Paragraph';
import { Link } from 'react-router-dom';
import RenderIf from '../UtilsComponents/RenderIf';
import CardMusic from '../Cards/CardMusic';
import { useState, useEffect, useRef } from 'react';
import { useGetWindowWidth } from '../../hook/useGetWindowWidth';

interface Props {
  title: string;
  subTitle?: string;
  albums: Array<{ img: string; title: string; content: string }>;
}

const RowList = ({ title = 'Titre de la liste', subTitle, albums }: Props) => {
  const [nbrCols, setNbrCols] = useState(0);
  const windowWidth = useGetWindowWidth();

  const rowList = useRef<HTMLDivElement>(null);

  const calcNbrCols = (width: number): number => {
    let nbrCols: number = 0;

    if (width < 530) nbrCols = 2;
    if (width > 530 && width < 730) nbrCols = 3;
    if (width > 730 && width < 1060) nbrCols = 4;
    if (width > 1060 && width < 1260) nbrCols = 5;
    if (width > 1260 && width < 1447) nbrCols = 6;
    if (width > 1447 && width < 1673) nbrCols = 7;
    if (width > 1673 && width < 1874) nbrCols = 8;
    if (width > 1874) nbrCols = 9;

    return nbrCols;
  };

  const listSlice = albums.slice(0, nbrCols);

  useEffect(() => {
    if (rowList.current) {
      setNbrCols(calcNbrCols(rowList.current.clientWidth));
    }
  }, [windowWidth]);

  return (
    <div className="mb-4" ref={rowList}>
      <div className="flex items-center justify-start pb-4 pt-1">
        <div className="grow">
          <H2 label={title} size="xl2" />
          <RenderIf bool={!!subTitle}>
            <Paragraph label={subTitle} />
          </RenderIf>
        </div>
        <Link
          to="#"
          className="ml-4 hover:underline text-gray-200 text-sm font-circularBold uppercase tracking-wide"
        >
          Voir Tous
        </Link>
      </div>
      <div
        className={`grid grid-cols-[repeat(var(--cols),_minmax(0,_1fr))]  gap-6 `}
        style={{ ['--cols' as any]: nbrCols }}
      >
        {listSlice.map((card, i) => (
          <CardMusic
            key={i}
            img={card.img}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default RowList;
