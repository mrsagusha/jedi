import colors from '@/shared/styles/variables.module.scss';

import type { Tab } from '@/lib/types';

const IMAGE_WIDTH = 432;
const IMAGE_HEIGHT = 332;

const TABLETS_WINDOW_SIZE = 768;

const PROJECTS_TABS: Tab[] = [
  { id: 0, name: 'all' },
  { id: 1, name: 'business' },
  { id: 2, name: 'creative' },
  { id: 3, name: 'portfolio' },
  { id: 4, name: 'blog' },
  { id: 5, name: 'infrastructure' },
  { id: 6, name: 'industrial' },
  { id: 7, name: 'other' },
];

const TABS_STYLES = {
  '& .MuiTabs-indicator': {
    backgroundColor: colors.darkGray,
  },
};

const TAB_STYLES = {
  '&.Mui-selected': {
    color: `${colors.white} !important`,
  },
};

export { IMAGE_HEIGHT, IMAGE_WIDTH, PROJECTS_TABS, TABS_STYLES, TAB_STYLES, TABLETS_WINDOW_SIZE };
