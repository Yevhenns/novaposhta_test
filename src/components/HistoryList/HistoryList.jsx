import { HistoryListItem } from './HistoryListItem';
import { Button, Box, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

export const HistoryList = ({ data, deleteItem, addInfo, clearHistory }) => {
  return (
    <Box>
      <h2>Історія пошуку</h2>
      <List>
        {data.map(item => {
          return (
            <HistoryListItem
              key={item.number}
              data={item.number}
              deleteItem={deleteItem}
              addInfo={addInfo}
            />
          );
        })}
      </List>
      <Button
        onClick={clearHistory}
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        sx={{ display: 'flex', mx: 'auto' }}
      >
        Очистити історію
      </Button>
    </Box>
  );
};

HistoryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteItem: PropTypes.func.isRequired,
  addInfo: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};
