'use client';

import { useEffect, useState, type ReactElement, type SyntheticEvent } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';

import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  PROJECTS_TABS,
  TABLETS_WINDOW_SIZE,
  TABS_STYLES,
  TAB_STYLES,
} from '@/widgets/Projects/model/constants';

import colors from '@/shared/styles/variables.module.scss';
import classes from './Projects.module.scss';

const Projects = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect((): (() => void) => {
    const handleResize = (): void => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChangeTab = (event: SyntheticEvent, value: string): void => setSelectedTab(value);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titleWrapper}>
        <Typography variant="h2" className={classes.title}>
          Our Projects
        </Typography>
        <Typography variant="h3" className={classes.subTitle}>
          Check out other themes based on <span className={classes.selection}>JEDI</span>
        </Typography>
      </Box>
      <Tabs
        className={classes.navigationTabs}
        value={selectedTab}
        orientation={windowWidth <= TABLETS_WINDOW_SIZE ? 'vertical' : 'horizontal'}
        onChange={handleChangeTab}
        sx={{
          ...TABS_STYLES,
          '& .MuiTabs-flexContainer': {
            alignItems: 'center',
            gap: windowWidth <= TABLETS_WINDOW_SIZE ? '10px' : '30px',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: colors.darkGray,
            display: windowWidth <= TABLETS_WINDOW_SIZE ? 'none' : 'block',
          },
        }}
      >
        {PROJECTS_TABS.map(({ id, name }): ReactElement => {
          return (
            <Tab
              key={id}
              className={`${classes.tab} ${name === selectedTab ? classes.selected : ''}`}
              value={name}
              label={name.toUpperCase()}
              disableRipple
              sx={TAB_STYLES}
            />
          );
        })}
      </Tabs>
      <Box className={classes.images}>
        <Image src="/images/projects-1.svg" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt="girl with ballon" />
        <Image src="/images/projects-2.svg" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt="girl with cup" />
        <Image src="/images/projects-3.svg" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} alt="tablet" />
      </Box>
    </Box>
  );
};

export { Projects };
