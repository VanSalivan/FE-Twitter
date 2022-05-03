import React from 'react';
import { Outlet } from 'react-router-dom';

import SearchPanel from '../../components/SearchPanel';
import NavMenu from '../NavMenu';

import './Layout.scss';

const Layout: React.FC = (): React.ReactElement => {
  return (
    <section className="section-wrap">
      <div className="layout">
        <div className="layout-left">
          <div className="sticky-top">
            <NavMenu />
          </div>
        </div>
        <div className="layout-main">
          <div className="header-main sticky-top">
            <h5 className="header-main__title">Главная</h5>
          </div>
          <Outlet />
        </div>
        <div className="layout-right">
          <div className="sticky-top">
            <SearchPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
