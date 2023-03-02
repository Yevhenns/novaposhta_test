import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItem from '@mui/material/ListItem';

export const HistoryListItem = ({ data, deleteItem, addInfo }) => {
  return (
    <ListItem sx={{ justifyContent: 'center' }}>
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
    </ListItem>
  );
};
