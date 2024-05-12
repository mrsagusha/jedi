'use client';

import { Box, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';

import classes from './Logo.module.scss';

interface LogoProps {
  logoImage: string;
  logoTitleImage: string;
  width: number;
  height: number;
  titleWidth: number;
  titleHeight: number;
  className?: string;
  subTitleClass?: string;
}

const Logo: FC<LogoProps> = ({
  logoImage,
  logoTitleImage,
  width,
  height,
  titleWidth,
  titleHeight,
  subTitleClass,
  className,
}): ReactElement => (
  <Box className={`${classes.logo} ${className}`}>
    <Image src={logoImage} width={width} height={height} alt="logo" />
    <Box className={classes.logoTitle}>
      <Image src={logoTitleImage} width={titleWidth} height={titleHeight} alt="logo title" />
      <Typography className={`${classes.subTitle} ${subTitleClass}`}>May the Joomla be with you</Typography>
    </Box>
  </Box>
);

export { Logo };
