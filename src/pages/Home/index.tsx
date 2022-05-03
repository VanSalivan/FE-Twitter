import React from 'react';

import NavMenu from '../../components/NavMenu';
import SearchPanel from '../../components/SearchPanel';
import Tweet from '../../components/Tweet';

import './Home.scss';

const Home: React.FC = (): React.ReactElement => {
  return (
    <section className="section-wrap">
      <div className="home">
        <div className="home-left">
          <NavMenu />
        </div>
        <div className="home-main">
          <div className="header-main">
            <h5 className="header-main__title">Главная</h5>
          </div>
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
        <div className="home-right">
          <SearchPanel />
        </div>
      </div>
    </section>
  );
};

export default Home;
