import React from 'react';
import { HistoryListItem } from './HistoryListItem';

export const HistoryList = ({ data, deleteItem, addInfo }) => {
  return (
    <ul>
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
    </ul>
  );
};
