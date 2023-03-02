import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Box from "@mui/material/Box";

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
    <form onSubmit={handlerSubmit}>
      <Stack spacing={2} sx={{ width: 300 }}>

      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cities}
      sx={{ width: 300 }}      
      renderOption={(props, cities) => (
        <Box component="li" {...props} key={cities.id}>
          {cities.label}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Введіть назву міста"/>}
    />

      {/* <div className="card flex justify-content-center">
            <AutoComplete value={city} suggestions={cities} onChange={(e) => setCity(e.value)} />
        </div> */}

        {/* <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          pattern="[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]"
          label="Введіть назву міста"
          variant="standard"
          required
        /> */}
      </Stack>
      <Button type="submit" variant="contained" endIcon={<SearchTwoToneIcon />}>
        Пошук відділень
      </Button>
    </form>
  );
};
