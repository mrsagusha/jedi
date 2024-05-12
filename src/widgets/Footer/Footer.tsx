'use client';

import type { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import { Logo } from '@/entities/Logo/Logo';
import { Blog } from '@/widgets/Footer/Blog/Blog';
import { ContactUs } from '@/widgets/Footer/ContactUs/ContactUs';
import {
  LOGO_HEIGHT,
  LOGO_TITLE_HEIGHT,
  LOGO_TITLE_WIDTH,
  LOGO_WIDTH,
  SOCIAL_IMAGE_HEIGHT,
  SOCIAL_IMAGE_WIDTH,
  SOCIAL_LINKS,
} from '@/widgets/Footer/model/constants';

import classes from './Footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <Box className={classes.footer}>
      <Box className={classes.content}>
        <Box className={classes.information}>
          <Logo
            logoImage="/images/logo-dark.svg"
            logoTitleImage="/images/logo-title-light.svg"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            titleWidth={LOGO_TITLE_WIDTH}
            titleHeight={LOGO_TITLE_HEIGHT}
            subTitleClass={classes.subTitle}
            className={classes.footerLogo}
          />
          <Box className={classes.contactInformation}>
            <Box className={classes.adress}>
              <Typography className={classes.title}>Adress:</Typography>
              <Typography className={classes.information}>28 Jackson Btvd Ste 1020 Chicago IL 60604-2340</Typography>
            </Box>
            <Box className={classes.contacts}>
              <Box className={classes.contact}>
                <Typography className={classes.title}>Phone:</Typography>
                <Link href="tel:800-2345-6789" className={classes.information}>
                  800-2345-6789
                </Link>
              </Box>
              <Box className={classes.contact}>
                <Typography className={classes.title}>E-Mail:</Typography>
                <Link href="mailto:info@demilimk.org" className={classes.information}>
                  info@demilimk.org
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className={classes.socialLinks}>
            {SOCIAL_LINKS.map(({ id, link, image, name }) => {
              return (
                <Link key={id} href={link} target="_blank">
                  <Image src={image} width={SOCIAL_IMAGE_WIDTH} height={SOCIAL_IMAGE_HEIGHT} alt={name} />
                </Link>
              );
            })}
          </Box>
        </Box>
        <Blog />
        <ContactUs />
      </Box>
      <Typography className={classes.privacy} variant="body2">
        Jedi © 2017.{' '}
        <Link href="" target="_blank">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export { Footer };
