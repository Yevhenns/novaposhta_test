import { useState } from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import PropTypes from 'prop-types';

export const AddressForm = ({ onSubmit, currentButtonClick }) => {
  const [city, setCity] = useState('');

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(city);
  };

  const handleClick = e => {
    const buttonNumber = e.target.id;
    currentButtonClick(buttonNumber);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Stack
        spacing={2}
        sx={{ width: 300, display: 'flex', mx: 'auto', marginBottom: '20px' }}
      >
        <TextField
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          pattern="[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]"
          placeholder="Місто"
          label="Введіть назву міста"
          variant="standard"
          required
        />
      </Stack>
      <Box sx={{ display: 'flex' }}>
        <Button
          onClick={handleClick}
          id="dep"
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: 'flex', mx: 'auto', marginTop: '10px' }}
        >
          Пошук відділень
        </Button>
        <Button
          onClick={handleClick}
          id="box"
          type="submit"
          variant="contained"
          endIcon={<SearchTwoToneIcon />}
          sx={{ display: 'flex', mx: 'auto', marginTop: '10px' }}
        >
          Пошук поштоматів
        </Button>
      </Box>
    </form>
  );
};

AddressForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentButtonClick: PropTypes.func.isRequired,
};
