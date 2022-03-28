import React, { useState } from 'react';

// material ui
import { Alert, Box, Button, CardMedia, Container, Grid, Snackbar, Typography } from '@mui/material';
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import CheckRounded from '@mui/icons-material/CheckRounded';

// thired party
import Particles from 'react-tsparticles';
import copy from 'clipboard-copy';
import { FaTerminal } from 'react-icons/fa';

import GradientText from 'components/ui-components/GradientText';
import { particlesConfig } from 'constants/particlesConfig';

function HeroSection({ email = 'said.ouddou@gmail.com' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        copy(email).then(() => {
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleClose = () => {
        setCopied(false);
    };
    return (
        <section id="home">
            <Container
                sx={{
                    position: 'relative',
                    minHeight: 500,
                    height: 'calc(100vh - 64px)',
                    maxHeight: { xs: 550, sm: 700, xl: 1000 },
                    transition: '0.3s'
                }}
            >
                <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, padding: 0, margin: 0, zIndex: 0, height: '100%' }}>
                    <Particles id="particules" options={{ ...particlesConfig }} />
                </Box>

                <Grid container wrap="nowrap" sx={{ height: '100%', mx: 'auto' }}>
                    {/* Hero Section Text */}
                    <Grid item sm={12} md={6} lg={6} sx={{ m: 'auto' }}>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                            <Typography variant="h3" sx={{ mb: 2 }}>
                                Hi, my name is Said Ouddou a <GradientText>Full Stack Developer</GradientText>
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                I’m a software engineer specializing in building (and occasionally designing) exceptional digital
                                experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.{' '}
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Button variant="contained" fullWidth color="primary" size="large">
                                        Hire Me
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={handleCopy}
                                        startIcon={<FaTerminal />}
                                        endIcon={copied ? <CheckRounded /> : <ContentCopyRounded />}
                                        fullWidth
                                        color="success"
                                        disableElevation
                                        disableFocusRipple
                                        disableRipple
                                        disableTouchRipple
                                        sx={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}
                                    >
                                        {email}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {/* Hero Section Image */}
                    <Grid
                        item
                        md={6}
                        lg={6}
                        sx={{ width: '100%', display: { xs: 'none', md: 'block' }, m: 'auto' }}
                        justifyContent="center"
                        alignItems={'center'}
                    >
                        <CardMedia component="img" image="assets/hero/blogging.svg" height={'100%'} alt="green iguana" />
                    </Grid>
                </Grid>
            </Container>
            {/* SnackBar */}
            <Snackbar
                open={copied}
                autoHideDuration={1000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </section>
    );
}

export default HeroSection;
