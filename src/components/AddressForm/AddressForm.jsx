import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export const AddressForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Stack spacing={2} sx={{ width: 300, display: 'flex', mx: 'auto' }}>
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
      <Button
        type="submit"
        variant="contained"
        endIcon={<SearchTwoToneIcon />}
        sx={{ display: 'flex', mx: 'auto', marginTop: '10px' }}
      >
        Пошук відділень
      </Button>
    </form>
  );
};
