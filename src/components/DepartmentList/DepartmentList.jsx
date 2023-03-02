import { nanoid } from 'nanoid';
import { CircularProgress, Box, List, ListItem } from '@mui/material';

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
      <List sx={{ height: '700px' }}>
        {departments.map(item => {
          return <ListItem key={nanoid()}>{item}</ListItem>;
        })}
      </List>
    </>
  );
};
