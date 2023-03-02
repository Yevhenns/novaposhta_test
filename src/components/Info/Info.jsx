import { List, ListItem } from '@mui/material';

export const Info = ({ info }) => {
  return (
    <List>
      {!info.status ? (
        <ListItem>Статус: Інформація відсутня</ListItem>
      ) : (
        <ListItem>Статус: {info.status}</ListItem>
      )}
      {!info.sender ? (
        <ListItem>Відправив: Інформація відсутня</ListItem>
      ) : (
        <ListItem>Відправив: {info.sender}</ListItem>
      )}
      {!info.recipient ? (
        <ListItem>Отримав: Інформація відсутня</ListItem>
      ) : (
        <ListItem>Отримав: {info.recipient}</ListItem>
      )}
    </List>
  );
};
