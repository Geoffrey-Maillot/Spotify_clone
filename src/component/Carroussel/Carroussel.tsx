

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import CardGender from '../Cards/CardGender';

// TODO: Remplacer any par le composant CardGender
interface Props {
  cards: Array<any>;
}

const Carroussel = ({ cards }: Props) => {



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
        <SwiperSlide key={i} className="w-[440px] h-[13.75rem] ">
          <CardGender {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carroussel;
