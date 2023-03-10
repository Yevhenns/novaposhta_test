import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: black;
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  &.active {
    color: white;
    box-shadow: 10px 5px 5px grey;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Nav = styled.nav`
  text-align: center;
  background-color: #1976d2;
  padding: 20px;
  border-bottom-left-radius: 70px 50px;
  border-bottom-right-radius: 70px 50px;
`;
export const List = styled.ul`
  justify-content: center;
  display: flex;
  
  }
`;
export const ListItem = styled.li`
  &:first-child {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 20px;
    }
  }
`;
