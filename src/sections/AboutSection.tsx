import React from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@mui/material';

// project import
import HeaderSection from 'components/ui-components/HeaderSection';

function AboutSection() {
    return (
        <section id="about">
            <HeaderSection title="About Me" />
            <Container sx={{ py: 5 }}>
                <Grid container spacing={5} justifyContent="center" alignItems={'center'}>
                    <Grid item xs={12} md={5}>
                        <Card>
                            <CardMedia src="/assets/about1.jpg" component="img" width={100} loading="lazy" />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography component="p" variant="body1">
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
