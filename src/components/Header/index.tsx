import React, { useState } from 'react';

// material-ui
import { AppBar, Box, Button, Container, IconButton, Link, Stack, Toolbar } from '@mui/material';
import { alpha } from '@mui/material/styles';

// project-import
import HeaderNavDropdown from './HeaderNavDropdown';

function Header() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={(theme) => ({
                backgroundColor: alpha(theme.palette.background.default, 0.5),
                backdropFilter: 'blur(30px)'
            })}
        >
            <Container>
                <Toolbar>
                    {/* Logo Container */}
                    <Box component={Link} href={'#'} aria-label="Go to homepage" sx={{ flexGrow: 1 }}>
                        <img src={'assets/logo-dark.svg'} alt="Berry" width="100" />
                    </Box>
                    {/* Navbar Container */}
                    <Stack component={'nav'} direction="row" sx={{ display: { xs: 'none', md: 'block' } }} spacing={2}>
                        {navItem.map((item) => (
                            <Button key={item} color="inherit" component={Link} href="#" sx={{ textTransform: 'capitalize' }}>
                                {item}
                            </Button>
                        ))}
                    </Stack>
                    {/* Mobile Menu Button */}
                    <Box sx={{ display: { md: 'none' }, ml: 1 }}>
                        <HeaderNavDropdown />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const navItem = ['home', 'about', 'service', 'portfolio', 'contact'];

export default Header;
