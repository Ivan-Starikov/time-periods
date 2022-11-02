import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react';

import useScreenSize from '../../hooks/useScreenSize';

import ChoosePeriodPanel from '../ChoosePeriodPanel/ChoosePeriodPanel';

import { topicsType } from '../../types/topics';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styledSlider.css';

import { Wrapper, EventWrapper, PanelWrapper, Year, Event } from './styled';

type Props = {
  currentTopic: topicsType;
  setCurrentTopic: (value: topicsType) => void;
  currentTopicNumber: number;
};

const Swiper = ({ currentTopic, currentTopicNumber, setCurrentTopic }: Props) => {
  const { isMobile } = useScreenSize();

  const sliderData = currentTopic.filter(({ number }) => number === currentTopicNumber).map(({ events }) => {
    return (
      events.map(({ year, event }) => (
        <SwiperSlide>
          <EventWrapper>
            <Year>{year}</Year>
            <Event>{event}</Event>
          </EventWrapper>
        </SwiperSlide>
      ))
    );
  });

  return (
    <Wrapper>
      <SwiperWrapper
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        pagination={Boolean(isMobile) && { clickable: true }}
        slidesPerView={isMobile ? 2 : 3}
        navigation={Boolean(!isMobile)}
      >
        {sliderData}
      </SwiperWrapper>
      {isMobile && (
        <PanelWrapper>
          <ChoosePeriodPanel currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
        </PanelWrapper>
      )}
    </Wrapper>
  );
};

export default Swiper;
