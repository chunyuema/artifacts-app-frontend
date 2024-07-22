import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material/';
import { LuSearchCode } from "react-icons/lu";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search operation based on searchTerm
    // For example: send search query to server, filter local data, etc.
  };

  return (
    <TextField
      variant="outlined"
      placeholder="My Dev Paths..."
      value={searchTerm}
      onChange={handleSearch}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <LuSearchCode />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
