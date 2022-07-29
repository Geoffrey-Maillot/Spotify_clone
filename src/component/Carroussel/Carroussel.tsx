// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// Import Component
import CardGender from '../Cards/CardGender';

// Import Hook
import { useGetWindowWidth } from '../../service/hook/useGetWindowWidth';

// TODO: Remplacer any par le composant CardGender
interface Props {
  cards: Array<any>;
}

const Carroussel = ({ cards }: Props) => {
  const windowWidth = useGetWindowWidth();
  const mobile = windowWidth <= 640;

  return (
    <Swiper
      className="w-full  my-4"
      grid={{
        rows: 1,
      }}
      slidesPerView={'auto'}
      spaceBetween={24}
      navigation={true}
      modules={[Navigation]}
    >
      {cards.map((card, i) => (
        <SwiperSlide
          key={i}
          className={`${
            mobile ? 'w-[13.625rem]' : 'w-[27.5rem]'
          } h-[13.75rem] `}
        >
          <CardGender {...card} size={mobile ? 'small' : 'large'} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carroussel;
