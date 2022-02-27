import React from 'react';

// material ui
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import GradientText from 'components/ui-components/GradientText';

function HeroSection() {
    return (
        <section id="home">
            <Box sx={{ overflow: 'hidden' }}>
                <Container
                    sx={{
                        minHeight: 500,
                        height: 'calc(100vh - 90px)',
                        maxHeight: { xs: 500, sm: 700, xl: 1000 },
                        transition: '0.3s'
                    }}
                >
                    <Grid container wrap="nowrap" sx={{ height: '100%', mx: 'auto' }}>
                        {/* Hero Section Text */}
                        <Grid item sm={12} md={6} sx={{ m: 'auto' }}>
                            <Box sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                <Typography variant="h3" sx={{ mb: 2 }}>
                                    Hi, my name is Said Ouddou a <GradientText>Full Stack Developer</GradientText>
                                </Typography>
                                <Typography color="text.secondary" sx={{ mb: 4 }}>
                                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital
                                    experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.{' '}
                                </Typography>
                                <Box sx={{ width: { xs: '100%', sm: '100%', md: '40%' } }}>
                                    <Button variant="contained" size="large" fullWidth>
                                        Hire Me
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Hero Section Image */}
                        <Grid item sm={6} md={6} sx={{ maxHeight: '100%', display: { xs: 'none', md: 'block' } }}>
                            <Box
                                id="hero-container-right-area"
                                aria-hidden="true"
                                sx={{
                                    maxHeight: { md: 700, xl: 1000 },
                                    transition: 'max-height 0.3s'
                                }}
                            >
                                <img
                                    src={'assets/Ecommerce campaign-rafiki.svg'}
                                    alt="hero image background"
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    );
}

export default HeroSection;
