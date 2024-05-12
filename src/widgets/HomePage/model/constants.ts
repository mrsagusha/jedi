import type { SlideItem } from '@/lib/types';

const SLIDES: SlideItem[] = [
  { id: 0, image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/background-1.png`, name: 'background-1' },
  { id: 1, image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/background-2.png`, name: 'background-2' },
  { id: 3, image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/background-3.png`, name: 'background-3' },
];

const SLIDER_DELAY = 5000;

export { SLIDES, SLIDER_DELAY };