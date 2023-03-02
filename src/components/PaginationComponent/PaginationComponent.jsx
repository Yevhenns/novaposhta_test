import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export const PaginationComponent = ({ departments, perPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(departments / perPage); i++) {
    pageNumbers.push(i);
  }

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    border: 1,
    width: '30px',
    height: '30px',
    textAlign: "center",
    p: "5px",
    display: "block",
  };

  return (
    <nav>
      <List sx={{display: "flex"}}>
        {pageNumbers.map(number => (
          <ListItem key={number} onClick={() => paginate(number)} sx={{p: "0", m: "5px"}}>
            <Link href="#" underline="hover" sx={{...commonStyles, borderRadius: '10px', mx: "auto"}}>{number}</Link>           
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
