import * as SC from './Nav.styled';

export const Nav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <SC.ListItem>
          <SC.Link to="/">Перевірити ТТН</SC.Link>
        </SC.ListItem>
        <SC.ListItem>
          <SC.Link to="/parcels">Список відділень</SC.Link>
        </SC.ListItem>
      </SC.List>
    </SC.Nav>
  );
};
