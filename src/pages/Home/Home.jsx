import { useState, useEffect } from 'react';
import { getInfo } from '../../components/services/API';
import { Form } from '../../components/Form/Form';
import { Info } from '../../components/Info/Info';
import { HistoryList } from '../../components/HistoryList/HistoryList';
import { Container } from '@mui/material';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [searchParcel, setSearchParcel] = useState(() => {
    return JSON.parse(window.localStorage.getItem('parcels')) ?? [];
  });
  const [info, setInfo] = useState([]);
  const [typeNumber, setTypeNumber] = useState([]);
  const [addFormNumber, setAddFormNumber] = useState(false);

  useEffect(() => {
    if (searchParcel) {
      localStorage.setItem('parcels', JSON.stringify(searchParcel));
    }
  }, [searchParcel]);

  useEffect(() => {
    setInfo(searchParcel.find(item => item.number === typeNumber));
  }, [searchParcel, typeNumber]);

  const handlerSabmit = number => {
    getInfo(number).then(data => {
      if (data) {
        const newInfoObj = {
          number: data.Number,
          status: data.Status,
          sender: data.WarehouseSender,
          recipient: data.WarehouseRecipient,
        };

        const addedNumber = searchParcel.some(
          item => item.number.trim() === number.trim()
        );
        addedNumber       
          ? toast.warn(`Посилка ${number} вже у списку!`)
          : setSearchParcel([newInfoObj, ...searchParcel]);
        setTypeNumber(number);
        setAddFormNumber(false);
      } else {
        toast.error(`Невірний номер посилки!`);
      }
    });
  };

  const deleteItem = number => {
    setSearchParcel(searchParcel.filter(item => item.number !== number));
  };

  const addInfo = number => {
    setTypeNumber(number);
    setAddFormNumber(true);
  };
  return (
    <Container maxWidth="sm">
      <h1>Мої посилки</h1>
      <Form
        onSubmit={handlerSabmit}
        addFormNumber={addFormNumber}
        typeNumber={typeNumber}
      />
      {info && <Info info={info} />}
      <HistoryList
        data={searchParcel}
        deleteItem={deleteItem}
        addInfo={addInfo}
      />
      <ToastContainer />
    </Container>
  );
};
