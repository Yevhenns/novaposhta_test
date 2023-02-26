import React from 'react';

export const Info = ({ info }) => {
  return (
    <ul>
      {!info.status ? (
        <li>Статус: Інформація відсутня</li>
      ) : (
        <li>Статус: {info.status}</li>
      )}
      {!info.sender ? (
        <li>Відправив: Інформація відсутня</li>
      ) : (
        <li>Відправив: {info.sender}</li>
      )}
      {!info.recipient ? (
        <li>Отримав: Інформація відсутня</li>
      ) : (
        <li>Отримав: {info.recipient}</li>
      )}
    </ul>
  );
};
