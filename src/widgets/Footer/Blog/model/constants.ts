import type { BlogItem } from '@/widgets/Footer/Blog/model/types';

const IMAGE_WIDTH = 62;
const IMAGE_HEIGHT = 61;

const ARROW_WIDTH = 13;
const ARROW_HEIGHT = 13;

const BLOGS: BlogItem[] = [
  {
    id: 0,
    image: '/images/footer/profile-1.png',
    date: '04/30/2014',
    title: 'Believe in the Business',
  },
  {
    id: 1,
    image: '/images/footer/profile-2.png',
    date: '05/01/2014',
    title: 'Color solutions for the office',
  },
  {
    id: 2,
    image: '/images/footer/profile-3.png',
    date: '04/28/2014',
    title: 'Anti-stress Joke Therapy',
  },
];

export { BLOGS, IMAGE_WIDTH, IMAGE_HEIGHT, ARROW_HEIGHT, ARROW_WIDTH };
