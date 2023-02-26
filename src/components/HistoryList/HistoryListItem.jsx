import React from 'react';

export const HistoryListItem = ({ data, deleteItem, addInfo }) => {
  return (
    <li>
      <button type="button" onClick={() => addInfo(data)}>
        {data}
      </button>
      <button type="button" onClick={() => deleteItem(data)}>
        X
      </button>
    </li>
  );
};
