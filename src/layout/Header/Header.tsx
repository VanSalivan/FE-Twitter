import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import SearchPanel from '../../components/SearchPanel';
import NavMenu from '../../components/NavMenu/NavMenu';

import './Header.scss';
import { Hidden } from '@mui/material';

const Header = () => (
  <div className="header">
    <div className="header__container">
      <div className="header__content">
        <div className="header__logo">
          <TwitterIcon sx={{ fontSize: '36px' }} />
        </div>
        <Hidden smUp>
          <SearchPanel />
          <MoreHorizIcon />
        </Hidden>
        <Hidden smDown>
          <NavMenu />
        </Hidden>
      </div>
    </div>
  </div>
);

export default Header;
