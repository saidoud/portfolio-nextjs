import React from 'react';
import { Grid } from '@mui/material';

import ServiceCard from 'components/ui-components/cards/ServiceCard';
import SectionContainer from 'components/ui-components/SectionContainer';

function ServiceSection() {
    return (
        <SectionContainer id="service" title="Service">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard title="Front End" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard title="Back End" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard title="Mobile Development" />
                </Grid>
            </Grid>
        </SectionContainer>
    );
}

export default ServiceSection;
