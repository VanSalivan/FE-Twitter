import React from 'react';
import { InputBase } from '@mui/material';

import './SearchPanel.scss';

const SearchPanel = () => {
  return (
    <InputBase
      className="search-button"
      placeholder="Поиск в Твиттере"
      fullWidth
    />
  );
};

export default SearchPanel;
