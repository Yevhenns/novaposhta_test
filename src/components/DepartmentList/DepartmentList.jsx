import React from 'react';
import { nanoid } from 'nanoid';

export const DepartmentList = departments => {
  return (
    <ul>
      {departments.map(item => {
        return <li key={nanoid()} data={item} />;
      })}
    </ul>
  );
};
