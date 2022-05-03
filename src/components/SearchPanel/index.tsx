import React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

const SearchStyled = styled(InputBase)({
  input: {
    borderRadius: 24,
    backgroundColor: '#E6ecf0',
    height: 45,
    padding: '5px 10px 5px 55px',
  },
});

const SearchPanel = () => {
  return <SearchStyled placeholder="Поиск в Твиттере" fullWidth />;
};

export default SearchPanel;
