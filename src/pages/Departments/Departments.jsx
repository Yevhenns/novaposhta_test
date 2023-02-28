import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';
import { Pagination } from '../../components/Pagination/Pagination';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');
  const [perPage] = useState(10);

  const handlerSabmit = city => {
    setLoading(true);
    getDepartments(city).then(data => {
      if (data) {
        const departmentsList = data
          .filter(item => Number(item.Number) < 1000)
          .map(item => item.Description);
        setDepartments(departmentsList);
        setLoading(false);
      } else {
        alert('Відділення не знайдене');
      }
    });
  };

  const lastDepartmentIndex = currentPage * perPage;
  const firstDepartmentIndex = lastDepartmentIndex - perPage;
  const currentDepartment = departments.slice(
    firstDepartmentIndex,
    lastDepartmentIndex
  );

  return (
    <>
      <h1>Список відділень</h1>
      <AddressForm onSubmit={handlerSabmit} />
      <DepartmentList departments={departments} loading={loading} />
      <Pagination departments={departments} perPage={perPage} />
    </>
  );
};
