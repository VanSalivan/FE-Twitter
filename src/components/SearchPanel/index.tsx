import React from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchPanel.scss';

const SearchPanel = () => {
  return (
    <div className="search-button__wrap">
      <label className="search-button__label">
        <SearchIcon className="search-button__icon" />
        <InputBase
          className="search-button"
          placeholder="Поиск в Твиттере"
        />
      </label>
    </div>
  );
};

export default SearchPanel;
