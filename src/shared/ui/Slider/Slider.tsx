'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { type FC, type ReactElement, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import type { Swiper as SwiperClass } from 'swiper';

import { NAVIGATION_BUTTON_HEIGHT, NAVIGATION_BUTTON_WIDTH } from '@/shared/ui/Slider/model/constants';
import type { SlideItem } from '@/lib/types';

import classes from './Slider.module.scss';

interface SliderProps {
  slides: SlideItem[];
  delay: number;
}

const Slider: FC<SliderProps> = ({ slides, delay }): ReactElement => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Box className={classes.sliderWrapper}>
      <Swiper
        className={classes.slider}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper): void => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay,
          disableOnInteraction: false,
        }}
      >
        {slides.map(({ id, image, name }) => {
          return (
            <SwiperSlide key={id} className={classes.slide}>
              <Image src={image} fill alt={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box className={classes.buttonsGroup}>
        <Button variant="text" onClick={() => swiperRef.current?.slidePrev()}>
          <Image
            src="/images/arrow-left.svg"
            width={NAVIGATION_BUTTON_WIDTH}
            height={NAVIGATION_BUTTON_HEIGHT}
            alt="previous"
          />
        </Button>
        <Button variant="text" onClick={() => swiperRef.current?.slideNext()}>
          <Image
            src="/images/arrow-right.svg"
            width={NAVIGATION_BUTTON_WIDTH}
            height={NAVIGATION_BUTTON_HEIGHT}
            alt="next"
          />
        </Button>
      </Box>
    </Box>
  );
};

export { Slider };
