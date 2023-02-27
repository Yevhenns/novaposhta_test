import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);

  const handlerSabmit = city => {
    getDepartments(city).then(data => {
      if (data) {
        const departmentsList = data.map(item => item.Description);
        setDepartments(departmentsList);
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
    </>
  );
};
