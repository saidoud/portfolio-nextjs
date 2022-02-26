import React from 'react';

// material-ui
import { AppBar, Box, Button, Container, IconButton, Link, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// project-import
import SvgMuiLogo from 'constants/icons/SvgMuiLogo';

function Header() {
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar>
                    {/* Logo Container */}
                    <Box component={Link} href={'#'} aria-label="Go to homepage" sx={{ flexGrow: 1 }}>
                        <SvgMuiLogo width={30} />
                    </Box>
                    {/* Navbar Container */}
                    <Stack component={'nav'} direction="row" sx={{ display: { xs: 'none', md: 'block' } }} spacing={2}>
                        <Button color="inherit" size="small" component={Link} href="#">
                            Home
                        </Button>
                        <Button color="inherit" size="small" component={Link} href="#">
                            About
                        </Button>
                        <Button color="inherit" size="small" component={Link} href="#">
                            Service
                        </Button>
                        <Button color="inherit" size="small" component={Link} href="#">
                            Portfolio
                        </Button>
                        <Button color="inherit" size="small" component={Link} href="#">
                            Contact
                        </Button>
                    </Stack>
                    {/* Mobile Menu Button */}
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
