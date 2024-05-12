'use client';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { type SyntheticEvent, useState, type ReactElement } from 'react';

import { Logo } from '@/entities/Logo/Logo';
import {
  LOGO_HEIGHT,
  LOGO_TITLE_HEIGHT,
  LOGO_TITLE_WIDTH,
  LOGO_WIDTH,
  TABS,
  TAB_STYLES,
} from '@/widgets/Header/model/constants';

import colors from '@/shared/styles/variables.module.scss';
import classes from './Header.module.scss';

const Header = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleChangeTab = (event: SyntheticEvent, value: string): void => setSelectedTab(value);

  const handleToggleMenu = (): void => setIsMenuVisible((prevState): boolean => !prevState);

  return (
    <Box className={classes.header}>
      <Box className={classes.burgerMenuWrapper}>
        <Box className={classes.burgerWrapper} onClick={handleToggleMenu}>
          <Box className={classes.burgerMenu}></Box>
        </Box>
        <Typography className={classes.burgerTitle} variant="body1">
          Home
        </Typography>
      </Box>
      <Box className={`${classes.menu} ${isMenuVisible ? classes.menuVisible : ''}`}>
        <Tabs
          className={classes.navigationTabsBurger}
          value={selectedTab}
          onChange={handleChangeTab}
          orientation="vertical"
          sx={{
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          {TABS.map(
            ({ id, name }): ReactElement => (
              <Tab
                key={id}
                className={`${classes.tab} ${classes.burgerTab} ${name === selectedTab ? classes.selected : ''}`}
                value={name}
                label={name.toUpperCase()}
                disableRipple
                sx={TAB_STYLES}
              />
            ),
          )}
        </Tabs>
      </Box>
      <Logo
        logoImage="/images/logo.svg"
        logoTitleImage="/images/logo-title.svg"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        titleWidth={LOGO_TITLE_WIDTH}
        titleHeight={LOGO_TITLE_HEIGHT}
      />
      <Tabs
        className={classes.navigationTabs}
        value={selectedTab}
        onChange={handleChangeTab}
        sx={{
          '& .MuiTabs-flexContainer': {
            alignItems: 'center',
            gap: '34px',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: colors.turquoise,
          },
        }}
      >
        {TABS.map(
          ({ id, name }): ReactElement => (
            <Tab
              key={id}
              className={classes.tab}
              value={name}
              label={name.toUpperCase()}
              disableRipple
              sx={TAB_STYLES}
            />
          ),
        )}
      </Tabs>
    </Box>
  );
};

export { Header };
