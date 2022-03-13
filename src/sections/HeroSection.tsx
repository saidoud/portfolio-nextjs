import React from 'react';
import Image from 'next/image';

// material ui
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import GradientText from 'components/ui-components/GradientText';

function HeroSection() {
    return (
        <section id="home">
            <Container
                sx={{
                    minHeight: 500,
                    height: 'calc(100vh - 64px)',
                    maxHeight: { xs: 500, sm: 700, xl: 1000 },
                    transition: '0.3s'
                }}
            >
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
                            <Box sx={{ width: { xs: '100%', sm: '100%', md: '40%' } }}>
                                <Button variant="contained" size="large" fullWidth color="primary">
                                    Hire Me
                                </Button>
                            </Box>
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
                        <CardMedia component="img" image="assets/hero/blogging.svg" alt="green iguana" />
                    </Grid>
                </Grid>
            </Container>
            {/* </Box> */}
        </section>
    );
}

export default HeroSection;
