import React from 'react';
import { Outlet } from 'react-router-dom';

import NavMenu from '../../components/NavMenu';
import SearchPanel from '../../components/SearchPanel';
import Tweet from '../../components/Tweet';

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
          <div className="layout-right__content">
            <Tweet
              user={{
                nickname: 'Dan',
                author: 'dan_abramov',
                avatarUrl:
            'https://external-preview.redd.it/yCIdRVIdKSZlwTacwwnrqx6o-ou1GNYc-WI24p_w6xE.jpg?auto=webp&s=222ab63c87addc7117b32dcbaee992fbfc60aefc',
              }}
              text={`“when people are rude to you, don’t forget that they might be cranky
          for an entirely unrelated reason that you can’t influence and they
          just happen to (intentionally or not) take it out on you” — me, a
          person who most definitely never does that`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
