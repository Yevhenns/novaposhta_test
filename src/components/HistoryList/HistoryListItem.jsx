import { Button, IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

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

HistoryListItem.propTypes = {
  data: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  addInfo: PropTypes.func.isRequired,
};
