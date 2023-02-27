import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export const AddressForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(city);
    setCity('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]"
          placeholder="Номер посилки"
          label="Введіть назву міста"
          variant="standard"
        />
      </Stack>
      <Button type="submit" variant="contained" endIcon={<SearchTwoToneIcon />}>
        Пошук відділень
      </Button>
    </form>
  );
};
