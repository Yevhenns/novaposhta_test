import React from 'react';
import { nanoid } from 'nanoid';



export const DepartmentList = ({ departments, loading }) => {
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <>
      <ul>
        {departments.map(item => {
          return <li key={nanoid()}>{item}</li>;
        })}
      </ul>
    </>
  );
};
