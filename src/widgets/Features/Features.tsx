'use client';

import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import Image from 'next/image';

import { FEATURES, IMAGE_HEIGHT, IMAGE_WIDTH } from '@/widgets/Features/model/constants';

import classes from './Features.module.scss';

const Features = (): ReactElement => (
  <Box className={classes.wrapper}>
    <Typography className={classes.title} variant="h4">
      More and More Features
    </Typography>
    <Box className={classes.features}>
      {FEATURES.map(({ image, title, information, id }): ReactElement => {
        return (
          <Box key={id} className={classes.feature}>
            <Image src={image} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt={title} />
            <Typography className={classes.featureTitle}>{title.toUpperCase()}</Typography>
            <Typography className={classes.information}>{information}</Typography>
          </Box>
        );
      })}
    </Box>
  </Box>
);

export { Features };
