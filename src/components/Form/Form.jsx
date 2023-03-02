import { useEffect, useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export const Form = ({ onSubmit, addFormNumber, inputNumber }) => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (addFormNumber) setNumber(inputNumber);
  }, [addFormNumber, inputNumber]);

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <Stack spacing={2} sx={{ width: 300, mx: 'auto' }} marginBottom={5}>
        <TextField
          value={number}
          onChange={handleNumberChange}
          type="text"
          name="number"
          pattern="[0-9]{14}"
          placeholder="Номер посилки"
          label="Введіть 14-значний номер посилки"
          variant="standard"
          required
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        endIcon={<SearchTwoToneIcon />}
        sx={{ display: 'flex', mx: 'auto' }}
      >
        Пошук
      </Button>
    </form>
  );
};
