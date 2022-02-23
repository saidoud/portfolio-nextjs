import  React from 'react';
import { AppBar ,Toolbar} from '@mui/material';

export interface IHeaderProps {
}

function Header (props: IHeaderProps) {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;
