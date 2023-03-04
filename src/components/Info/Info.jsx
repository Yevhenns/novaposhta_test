import { List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';

export const Info = ({ info }) => {
  return (
    <List>
      {info.status ? (
        <ListItem>Статус: {info.status}</ListItem>
      ) : (
        <ListItem>Статус: Інформація відсутня</ListItem>
      )}
      {info.sender ? (
        <ListItem>Відправив: {info.sender}</ListItem>
      ) : (
        <ListItem>Відправив: Інформація відсутня</ListItem>
      )}
      {info.recipient ? (
        <ListItem>Отримав: {info.recipient}</ListItem>
      ) : (
        <ListItem>Отримав: Інформація відсутня</ListItem>
      )}
    </List>
  );
};

Info.propTypes = {
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
