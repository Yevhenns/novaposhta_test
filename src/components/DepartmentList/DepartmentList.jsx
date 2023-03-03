import { nanoid } from 'nanoid';
import { List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';

export const DepartmentList = ({ currentDepartments, currentCity }) => {
  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
  };

  return (
    <>
      <h2>Населений пункт: {currentCity.toUpperCase()}</h2>
      <List>
        {currentDepartments.map(item => {
          return (
            <ListItem
              key={nanoid()}
              sx={{ minHeight: '60px', ...commonStyles, borderRadius: '16px' }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

DepartmentList.propTypes = {
  currentDepartments: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
};
