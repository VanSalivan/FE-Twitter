import React from 'react';
import { InputBase } from '@mui/material';

import './SearchPanel.scss';

const SearchPanel = () => {
  return (
    <div className="search-wrapper">
      <InputBase
        className="search-button"
        placeholder="Поиск в Твиттере"
        fullWidth
      />
    </div>
  );
};

export default SearchPanel;
