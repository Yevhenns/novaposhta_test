import { HistoryListItem } from './HistoryListItem';
import { Button, Box, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
