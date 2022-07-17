import React from 'react';

import './styles.scss';

type BoxListProps = {
  title: string;
};

const BoxList: React.FC<BoxListProps> = ({ title }) => (
  <aside className="box-list">
    <div className="box-list__title">{title}</div>
    <ul className="box-list__list">
      <li className="box-list__item">Что-то 1</li>
      <li className="box-list__item">Что-то 2</li>
      <li className="box-list__item">Что-то 3</li>
    </ul>
  </aside>
);

export default BoxList;
