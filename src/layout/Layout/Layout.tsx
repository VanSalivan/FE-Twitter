import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import SearchPanel from '../../components/SearchPanel';
import BoxList from '../../components/BoxList/BoxList';

import { Hidden} from '@mui/material';
import './Layout.scss';

const Layout: React.FC = (): React.ReactElement => (
  <>
    <Header />
    <div className="layout">
      <main className="main">
        <Hidden smDown>
          <div className="header-main sticky-top">
            <h5 className="header-main__title">Главная</h5>
          </div>
        </Hidden>
        <Outlet />
      </main>
      <Hidden mdDown>
        <aside className="aside">
          <div className="aside__container">
            <div className="aside__header sticky-top">
              <SearchPanel />
            </div>
            <div className="aside__content">
              <BoxList title="Вам может понравиться"/>
            </div>
          </div>
        </aside>
      </Hidden>
    </div>
  </>
);

export default Layout;
