import * as SC from './Nav.styled';

export const Nav = () => {
  return (
    <SC.Nav>
      <SC.List>
        <li>
          <SC.Link to="/">Перевірити ТТН</SC.Link>
        </li>
        <li>
          <SC.Link to="/parcels">Список відділень</SC.Link>
        </li>
      </SC.List>
    </SC.Nav>
  );
};
