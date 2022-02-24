import React from 'react';

// material-ui
import { AppBar, Box, Button, Container, Link, Stack, Toolbar } from '@mui/material';
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
          {/* Logo Container */}
        <Box
          component={Link}
          href={"#"}
          aria-label="Go to homepage"
          sx={{ lineHeight: 0, mr: 2 ,flexGrow:1}}>
           <SvgMuiLogo width={30} />
          </Box>
          {/* Navbar Container */}
           <Stack component={"nav"} direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
                            <Button color="inherit" component={Link} href="#" >
                                Home
                            </Button>
                            <Button color="inherit" component={Link} href="#">
                                Dashboard
                            </Button>
                            <Button color="inherit" component={Link} href="#">
                                Documentation
                            </Button>
                            <Button
                                component={Link}
                                href="#"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Purchase Now
                            </Button>
              </Stack>
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
