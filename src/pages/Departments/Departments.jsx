import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';

import UsePagination from '../../components/Pagination/Pagination';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [currentPage, setCurrentPage] = useState('1');

  const handlerSabmit = city => {
    getDepartments(city, currentPage).then(data => {
      if (data) {
        const departmentsList = data.map(item => item.Description);
        const filteredData = departmentsList.filter(item =>
          item.includes('Відділення')
        );
        setDepartments(filteredData);
      } else {
        alert('Відділення не знайдене');
      }
    });
  };

  return (
    <>
      <h1>Список відділень</h1>
      <AddressForm onSubmit={handlerSabmit} />
      <DepartmentList departments={departments} />
      <UsePagination />
    </>
  );
};
