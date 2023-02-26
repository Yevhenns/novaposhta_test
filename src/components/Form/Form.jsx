import React, { useEffect, useState } from 'react';

export const Form = ({ onSubmit, addFormNumber, typeNumber }) => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (addFormNumber) setNumber(typeNumber);
  }, [addFormNumber, typeNumber]);

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          value={number}
          onChange={handleNumberChange}
          type="text"
          name="number"
          pattern="[0-9]{14}"
          title="Введіть 14-значний номер посилки без пробілів"
          placeholder="Номер посилки"
          required
        />
      </label>
      <button type="submit">Пошук</button>
    </form>
  );
};
