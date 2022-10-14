
import { TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';








const SearchBar = ({ handleChange, currentSearch }) => {

  return (
    <TextField

      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      placeholder='Search'
      size='small'
      onChange={handleChange}
      value={currentSearch}
      autoFocus={currentSearch ? true : false}

    />
  );
}

export default SearchBar;