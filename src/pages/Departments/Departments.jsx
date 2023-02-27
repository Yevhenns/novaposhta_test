import { useState } from 'react';
import { DepartmentList } from '../../components/DepartmentList/DepartmentList';
import { AddressForm } from '../../components/AddressForm/AddressForm';
import { getDepartments } from '../../components/services/API';

export const Departments = () => {
  const [departments, setDepartments] = useState([]);

  getDepartments();

  const handlerSabmit = () => {
    setDepartments();
  };
  return (
    <>
      <h1>Список відділень</h1>
      <AddressForm onSubmit={handlerSabmit} />
      <DepartmentList departments={departments} />
    </>
  );
};
