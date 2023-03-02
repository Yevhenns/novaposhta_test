import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';
import { Container, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  const [inputCity, setInputCity] = useState([]);
  const [addFormCity, setAddFormCity] = useState(false);

  const handlerSabmit = city => {
    setLoading(true);
    getDepartments(city).then(data => {
      if (!data) {
        toast.error(`Відділення не знайдене`);
        setLoading(false);
      } else {
        const departmentsList = data
          .filter(item => Number(item.Number) < 1000)
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
        setCurrentPage(1);
      }
    });
  };

  const addInfo = city => {
    setInputCity(city);
    setAddFormCity(true);
  };

  const lastDepartmentIndex = currentPage * perPage;
  const firstDepartmentIndex = lastDepartmentIndex - perPage;
  const currentDepartment = departments.slice(
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
        addFormCity={addFormCity}
        inputCity={inputCity}
      />
      <DepartmentList departments={currentDepartment} loading={loading} />
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
