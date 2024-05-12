import type { SocilLink } from '@/widgets/Footer/model/types';

const LOGO_WIDTH = 78;
const LOGO_HEIGHT = 72;

const LOGO_TITLE_WIDTH = 72;
const LOGO_TITLE_HEIGHT = 38;

const SOCIAL_IMAGE_WIDTH = 42;
const SOCIAL_IMAGE_HEIGHT = 42;

const SOCIAL_LINKS: SocilLink[] = [
  {
    id: 0,
    link: 'https://www.facebook.com/',
    image: '/images/footer/facebook.svg',
    name: 'facebook',
  },
  {
    id: 1,
    link: 'https://twitter.com/',
    image: '/images/footer/twitter.svg',
    name: 'twitter',
  },
  {
    id: 2,
    link: 'https://www.google.com/',
    image: '/images/footer/google.svg',
    name: 'google',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/',
    image: '/images/footer/linkedin.svg',
    name: 'linkedin',
  },
];

export {
  LOGO_HEIGHT,
  LOGO_WIDTH,
  LOGO_TITLE_WIDTH,
  LOGO_TITLE_HEIGHT,
  SOCIAL_LINKS,
  SOCIAL_IMAGE_WIDTH,
  SOCIAL_IMAGE_HEIGHT,
};
