import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export const AddressForm = ({ onSubmit, cities }) => {
  const [city, setCity] = useState('');

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handlerSubmit} style={{marginBottom: "10px"}}>
      <Stack spacing={2} sx={{ width: 300, display: "flex", mx: "auto" }}>
              <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]"
          label="Введіть назву міста"
          variant="standard"
          required
        />
      </Stack>
      <Button type="submit" variant="contained" endIcon={<SearchTwoToneIcon />} sx={{display: "flex", mx: "auto", marginTop: "10px"}}>
        Пошук відділень
      </Button>
    </form>
  );
};
