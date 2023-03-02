import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export const AddressForm = ({ onSubmit, addFormCity, inputCity }) => {
  const [city, setCity] = useState('');

  useEffect(() => {
    if (addFormCity) setCity(inputCity);
  }, [addFormCity, inputCity]);

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: "10px"}}>
      <Stack spacing={2} sx={{ width: 300, display: "flex", mx: "auto" }}>
        <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          pattern="[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]"
          placeholder="Місто"
          label="Введіть назву міста"
          variant="standard"
        />
      </Stack>
      <Button type="submit" variant="contained" endIcon={<SearchTwoToneIcon />} sx={{display: "flex", mx: "auto", marginTop: "10px"}}>
        Пошук відділень
      </Button>
    </form>
  );
};
