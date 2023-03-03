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
  const [currentButton, setCurrentButton] = useState(null);

  const currentButtonClick = buttonNumber => {
    setCurrentButton(buttonNumber);
  };
  console.log(currentButton);

  const handlerSabmit = city => {
    setLoading(true);
    const optimizedCity = city.trim().toLowerCase();
    if (city.trim() === '') {
      toast.error(`Введіть назву населеного пункту!`);
      setLoading(false);
      setDepartments([]);
      return;
    }
    if (optimizedCity === currentCity) {
      setLoading(false);
      return;
    }
    getDepartments(optimizedCity).then(data => {
      if (data.length === 0) {
        toast.error(`Невірна назва населеного пункту!`);
        setLoading(false);
        setDepartments([]);
        return;
      } else {
        if (currentButton === '1') {
          const departmentsList = data.filter(
            item =>
              String(item.TypeOfWarehouse) ===
                '9a68df70-0267-42a8-bb5c-37f427e36ee4' ||
              String(item.TypeOfWarehouse) ===
                '841339c7-591a-42e2-8233-7a0a00f0ed6f'
          );
          departmentsList.map(item => item.Description);
          setDepartments(departmentsList);
          setLoading(false);
          setCurrentPage(1);
          setCurrentCity(optimizedCity);
          console.log(data);
          return;
        }
        if (currentButton === '2') {
          const departmentsList = data.filter(
            item =>
              String(item.TypeOfWarehouse) ===
              'f9316480-5f2d-425d-bc2c-ac7cd29decf0'
          );
          departmentsList.map(item => item.Description);
          setDepartments(departmentsList);
          setLoading(false);
          setCurrentPage(1);
          setCurrentCity(optimizedCity);
          console.log(data);
        }
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
          loading={loading}
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
