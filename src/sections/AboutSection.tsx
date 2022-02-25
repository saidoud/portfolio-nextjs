import React from 'react';
import { Container, Typography } from '@mui/material';

// project import
import HeaderSection from 'components/ui-components/HeaderSection';

function AboutSection() {
    return (
        <section id="about">
            <HeaderSection title="About Me" />
            <Container>
                <Typography component="p" variant="h6">
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </Typography>
            </Container>
        </section>
    );
}

export default AboutSection;
