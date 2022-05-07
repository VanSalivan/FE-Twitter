import React from 'react';
import { Outlet } from 'react-router-dom';

import NavMenu from '../../components/NavMenu';
import SearchPanel from '../../components/SearchPanel';

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
          <div className="layout-right__content" />
        </div>
      </div>
    </section>
  );
};

export default Layout;
