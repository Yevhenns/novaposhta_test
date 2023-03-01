import * as React from 'react';

export const PaginationComponent = ({ departments, perPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(departments / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};