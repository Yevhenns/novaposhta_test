import React from 'react';
import { nanoid } from 'nanoid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const DepartmentList = ({ departments, loading }) => {
  if (loading) {
    return <Box sx={{ display: 'flex', mx: 'auto' }}>
      <CircularProgress />
    </Box>;
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
