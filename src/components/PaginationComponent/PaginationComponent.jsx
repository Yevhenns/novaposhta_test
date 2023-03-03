import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';

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

PaginationComponent.propTypes = {
  departments: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
