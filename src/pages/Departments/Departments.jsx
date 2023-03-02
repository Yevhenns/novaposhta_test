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
  const [perPage] = useState(15);

  const handlerSabmit = city => {
    setLoading(true);
    if (city.trim() === '') {
      toast.error(`Введіть назву міста!`);
      setLoading(false);
      setDepartments([]);
      return;
    }
    getDepartments(city.trim()).then(data => {
      if (data.length === 0) {
        toast.error(`Помилка в назві міста!`);
        setLoading(false);
        setDepartments([]);
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
      <AddressForm onSubmit={handlerSabmit} />
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
