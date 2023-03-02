import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';
import { PaginationComponent } from '../../components/PaginationComponent/PaginationComponent';
import { Container } from '@mui/material';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Departments = () => {
  // const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');
  const [perPage] = useState(20);
  const [inputCity, setInputCity] = useState([]);
  const [addFormCity, setAddFormCity] = useState(false);

  // useEffect(() => {
  //   getCitiesAll().then(data => {
  //     const citiesList = data.map(item => ({label: item.Description, id: Number(item.CityID)}));
  //     setCities(citiesList);
  //   })
  // }, [])

  const handlerSabmit = city => {
    setLoading(true);
    getDepartments(city).then(data => {
      if (data) {
        const departmentsList = data
          .filter(item => Number(item.Number) < 1000)
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
        setCurrentPage('1');
        console.log(departmentsList)
      } else {
        toast.error(`Відділення не знайдене`);
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

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container maxWidth="sm">
      <h1>Список відділень</h1>
      <AddressForm onSubmit={handlerSabmit} addFormCity={addFormCity} inputCity={inputCity}/>
      <DepartmentList departments={currentDepartment} loading={loading} />
      {!loading && <PaginationComponent departments={departments.length} perPage={perPage} paginate={paginate} currentPage={currentPage}/>}
      <ToastContainer />
    </Container>
  );
};
