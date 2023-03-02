import { useState, useEffect } from 'react';
import { getInfo } from '../../components/services/API';
import { Form } from '../../components/Form/Form';
import { Info } from '../../components/Info/Info';
import { HistoryList } from '../../components/HistoryList/HistoryList';
import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [searchParcel, setSearchParcel] = useState(() => {
    return JSON.parse(window.localStorage.getItem('parcels')) ?? [];
  });
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [inputNumber, setInputNumber] = useState([]);
  const [addFormNumber, setAddFormNumber] = useState(false);

  useEffect(() => {
    if (searchParcel) {
      localStorage.setItem('parcels', JSON.stringify(searchParcel));
    }
  }, [searchParcel]);

  useEffect(() => {
    setInfo(searchParcel.find(item => item.number === inputNumber));
  }, [searchParcel, inputNumber]);

  const handlerSabmit = number => {
    const addedNumber = searchParcel.some(
      item => item.number.trim() === number.trim()
    );
    if(addedNumber) {
      toast.warn(`Посилка ${number} вже у списку!`)
      return
    }    
    setIsLoading(true)
    getInfo(number).then(data => {
      if (!data) {
        toast.error(`Невірний номер посилки!`);
        setIsLoading(false)
      } else {
        const newInfoObj = {
          number: data.Number,
          status: data.Status,
          sender: data.WarehouseSender,
          recipient: data.WarehouseRecipient,
        };
        setSearchParcel([newInfoObj, ...searchParcel]);
        setInputNumber(number);
        setAddFormNumber(false);
        setIsLoading(false);
      }
    });
  };

  const deleteItem = number => {
    setSearchParcel(searchParcel.filter(item => item.number !== number));
  };

  const clearHistory = () => {
    setSearchParcel([]);
  };

  const addInfo = number => {
    setInputNumber(number);
    setAddFormNumber(true);
  };
  
  return (
    <Container maxWidth="sm">
      <h1>Мої посилки</h1>
      {searchParcel.length === 0 && <p>Приклад номеру: 20400271548566</p>}
      <Form
        onSubmit={handlerSabmit}
        addFormNumber={addFormNumber}
        inputNumber={inputNumber}
      />
      {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>}
      {info && <Info info={info} />}
      {searchParcel.length > 0 && <HistoryList
        data={searchParcel}
        deleteItem={deleteItem}
        addInfo={addInfo}
        clearHistory={clearHistory}
      />}
      <ToastContainer />
    </Container>
  );
};
