import type { Tab } from '@/lib/types';

import colors from '@/shared/styles/variables.module.scss';

const LOGO_WIDTH = 78;
const LOGO_HEIGHT = 72;

const LOGO_TITLE_WIDTH = 72;
const LOGO_TITLE_HEIGHT = 38;

const TABS: Tab[] = [
  { id: 0, name: 'home' },
  { id: 1, name: 'features' },
  { id: 2, name: 'portfolio' },
  { id: 3, name: 'blog' },
];

const TAB_STYLES = {
  color: `${colors.black} !important`,
};

export { LOGO_HEIGHT, LOGO_WIDTH, LOGO_TITLE_WIDTH, LOGO_TITLE_HEIGHT, TABS, TAB_STYLES };
