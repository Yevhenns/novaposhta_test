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

  console.log(departments)
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
        const departmentsList = data
          .filter(item => Number(item.Number) < 1000)
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
        setCurrentPage(1);
        setCurrentCity(optimizedCity);
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
      <AddressForm onSubmit={handlerSabmit} />
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
