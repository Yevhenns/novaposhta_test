import { nanoid } from 'nanoid';
import { List, ListItem } from '@mui/material';

export const DepartmentList = ({
  currentDepartments,
  loading,
  currentCity,
}) => {
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
              sx={{ height: '50px', ...commonStyles, borderRadius: '16px' }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
