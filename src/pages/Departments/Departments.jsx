import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';
import { Container, Box, CircularProgress } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Departments = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(15);
  const [clickButton, setClickButton] = useState('');
  const [currentButton, setCurrentButton] = useState('');

  const currentButtonClick = buttonNumber => {
    setClickButton(buttonNumber);
  };

  const handlerSabmit = city => {
    setLoading(true);
    const optimizedCity = city.trim().toLowerCase();
    if (city.trim() === '') {
      toast.error(`Введіть назву населеного пункту!`);
      setLoading(false);
      setDepartments([]);
      return;
    }
    if (optimizedCity === currentCity && currentButton === clickButton) {
      setLoading(false);
      return;
    }
    getDepartments(optimizedCity).then(data => {
      if(!data) {
        toast.error(`Невірна назва населеного пункту!`);
        setLoading(false);
        return
      }
      if (data.length === 0) {
        toast.error(`Невірна назва населеного пункту!`);
        setLoading(false);
        setDepartments([]);
        return;
      }
      if (clickButton === 'dep') {
        const departmentsList = data
          .filter(
            item =>
              String(item.TypeOfWarehouse) ===
                '9a68df70-0267-42a8-bb5c-37f427e36ee4' ||
              String(item.TypeOfWarehouse) ===
                '841339c7-591a-42e2-8233-7a0a00f0ed6f'
          )
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
        setCurrentPage(1);
        setCurrentCity(optimizedCity);
        setCurrentButton('dep');
        return;
      }
      if (clickButton === 'box') {
        const departmentsList = data
          .filter(
            item =>
              String(item.TypeOfWarehouse) ===
              'f9316480-5f2d-425d-bc2c-ac7cd29decf0'
          )
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
        setCurrentPage(1);
        setCurrentCity(optimizedCity);
        setCurrentButton('box');
      }
    });
  };

  const lastDepartmentIndex = currentPage * perPage;
  const firstDepartmentIndex = lastDepartmentIndex - perPage;
  const currentDepartments = departments.slice(
    firstDepartmentIndex,
    lastDepartmentIndex
  );

  const paginate = (_, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container maxWidth="sm">
      <h1>Список відділень</h1>
      <AddressForm
        onSubmit={handlerSabmit}
        currentButtonClick={currentButtonClick}
      />
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {departments.length > 0 && (
        <DepartmentList
          currentDepartments={currentDepartments}
          currentCity={currentCity}
        />
      )}
      {!loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <PaginationComponent
            departments={departments.length}
            perPage={perPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Box>
      )}
      <ToastContainer />
    </Container>
  );
};
