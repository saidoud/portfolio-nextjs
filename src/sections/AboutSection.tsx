import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';

import SectionContainer from 'components/ui-components/SectionContainer';

function AboutSection() {
    return (
        <SectionContainer id="about" title="About Me" bgColor="#0A1929">
            <Grid container spacing={5} justifyContent="center" alignItems={'center'}>
                <Grid item xs={12} md={5}>
                    <img src="/assets/undraw_react.svg" height={'auto'} width={'100%'} loading="lazy" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography component="p" variant="body1">
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building accessible, human-centered products at Upstatement.
                    </Typography>
                </Grid>
            </Grid>
        </SectionContainer>
    );
}

export default AboutSection;
