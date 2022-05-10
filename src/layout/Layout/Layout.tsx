import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import SearchPanel from '../../components/SearchPanel';
import Tweet from '../../components/Tweet';

import './Layout.scss';
import { Hidden } from '@mui/material';

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
        </aside>
      </Hidden>
    </div>
  </>
);

export default Layout;
