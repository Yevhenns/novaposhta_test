import React from 'react';
import { HistoryListItem } from './HistoryListItem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';

export const HistoryList = ({ data, deleteItem, addInfo }) => {
  return (
<Box>
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
    </List >
    </Box>
  );
};
