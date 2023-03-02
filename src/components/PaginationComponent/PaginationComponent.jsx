import { Pagination } from '@mui/material';

export const PaginationComponent = ({ departments, perPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(departments / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      count={pageNumbers.length}
      color="primary"
      onChange={paginate}
      sx={{ textAlign: 'center' }}
    />
  );
};
