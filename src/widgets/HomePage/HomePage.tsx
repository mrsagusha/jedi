import { Box } from '@mui/material';
import type { ReactElement } from 'react';

import { Header } from '@/widgets/Header/Header';
import { Slider } from '@/shared/ui/Slider/Slider';
import { Projects } from '@/widgets/Projects/Projects';
import { Features } from '@/widgets/Features/Features';
import { Footer } from '@/widgets/Footer/Footer';
import { SLIDER_DELAY, SLIDES } from '@/widgets/HomePage/model/constants';

import classes from './HomePage.module.scss';

const HomePage = (): ReactElement => (
  <Box className={classes.main}>
    <Header />
    <Slider slides={SLIDES} delay={SLIDER_DELAY} />
    <Projects />
    <Features />
    <Footer />
  </Box>
);
export { HomePage };
