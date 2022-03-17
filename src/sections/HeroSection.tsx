import React from 'react';
import Particles from 'react-tsparticles';

// material ui
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import GradientText from 'components/ui-components/GradientText';

function HeroSection() {
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
                        <CardMedia component="img" image="assets/hero/blogging.svg" height={'100%'} alt="green iguana" />
                    </Grid>
                </Grid>
            </Container>
            {/* </Box> */}
        </section>
    );
}

const particlesConfig = {
    // background: {
    //     position: 'absolute',
    //     repeat: 'no-repeat',
    //     size: '100vh',
    //     opacity: 1
    // },
    // backgroundMode: {
    //     enable: true,
    //     zIndex: 0
    // },
    particles: {
        number: {
            value: 218,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    // backgroundMask: {
    //     composite: 'destination-out'
    // },
    fullScreen: {
        enable: false,
        zIndex: 1
    },
    pauseOnOutsideViewport: true,
    detectRetina: true
};

export default HeroSection;
