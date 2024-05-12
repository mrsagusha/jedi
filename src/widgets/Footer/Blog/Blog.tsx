'use client';

import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import Image from 'next/image';

import { ARROW_HEIGHT, ARROW_WIDTH, BLOGS, IMAGE_HEIGHT, IMAGE_WIDTH } from '@/widgets/Footer/Blog/model/constants';

import classes from './Blog.module.scss';

const Blog = (): ReactElement => (
  <Box className={classes.wrapper}>
    <Typography className={classes.title}>LATEST FROM THE BLOG</Typography>
    <Box className={classes.blogs}>
      {BLOGS.map(({ id, image, date, title }): ReactElement => {
        return (
          <Box key={id} className={classes.blog}>
            <Image src={image} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt={title} />
            <Box className={classes.blogInformation}>
              <Box className={classes.dateWrapper}>
                <Image src="/images/footer/arrow.svg" width={ARROW_WIDTH} height={ARROW_HEIGHT} alt="arrow" />
                <Typography className={classes.date}>{date}</Typography>
              </Box>
              <Typography className={classes.blogTitle}>{title}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  </Box>
);

export { Blog };
