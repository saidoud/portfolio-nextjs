import React from 'react';

// material-ui
import { AppBar, Box, Container, Link, Toolbar } from '@mui/material';
import { makeStyles } from "@mui/styles";

// project-import 
import SvgMuiLogo from 'constants/icons/SvgMuiLogo';

export interface IHeaderProps {
}

function Header(props: IHeaderProps) {
  const classes = useStyles();
  return (
    <AppBar position='sticky' color='inherit'  variant='outlined' className={classes.root}>
      <Container>
        <Toolbar>
        <Box
          component={Link}
          href={"#"}
          aria-label="Go to homepage"
          sx={{ lineHeight: 0, mr: 2 }}>
           <SvgMuiLogo width={30} />
        </Box>
        </Toolbar>
        </Container>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  
}
}));

export default Header;
