import React, { useState } from 'react';

export const AddressForm = ({ onSubmit }) => {
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
      <label>
        <input
          value={city}
          onChange={handleCityChange}
          type="text"
          name="city"
          // pattern="^[а-яА-Я]+(([' -][а-яА-Я ])?[а-яА-Я]*)*$"
          title="Введіть назву міста"
          placeholder="Місто"
          required
        />
      </label>
      <button type="submit">Пошук відділень</button>
    </form>
  );
};
