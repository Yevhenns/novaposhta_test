import React from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const HistoryListItem = ({ data, deleteItem, addInfo }) => {
  return (
    <li>
      <Button onClick={() => addInfo(data)} variant="text">
        {data}
      </Button>
      <IconButton
        onClick={() => deleteItem(data)}
        aria-label="delete"
        color="error"
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};
