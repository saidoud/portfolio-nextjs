import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

// project import
import HeaderSection from 'components/ui-components/HeaderSection';

function AboutSection() {
    return (
        <section id="about">
            <HeaderSection title="About Me" />
            <Container sx={{ py: 5 }}>
                <Grid container spacing={2} justifyContent="center" alignItems={'center'}>
                    <Grid item xs={12} md={6}>
                        <img src="/assets/undraw_developer.svg" width={450} height="auto" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component="p" variant="h6">
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                            Currently, I’m focused on building accessible, human-centered products at Upstatement.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default AboutSection;
