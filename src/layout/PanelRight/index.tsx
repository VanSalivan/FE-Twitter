import React from 'react';

import SearchPanel from '../../components/SearchPanel';

import './PanelRight.scss';

const PanelRight: React.FC = () => {
  return (
    <div className="panel-right sticky-top">
      <SearchPanel />
    </div>
  );
};

export default PanelRight;
