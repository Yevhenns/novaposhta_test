import { nanoid } from 'nanoid';
import { CircularProgress, Box } from '@mui/material';

export const DepartmentList = ({ departments, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
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
