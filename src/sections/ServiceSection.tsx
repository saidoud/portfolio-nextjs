import React from 'react';
import { Container, Grid } from '@mui/material';
import HeaderSection from 'components/ui-components/HeaderSection';
import ServiceCard from 'components/ui-components/cards/ServiceCard';

function ServiceSection() {
    return (
        <section id="service">
            <HeaderSection title="Service" />
            <Container sx={{ py: 5 }}>
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
            </Container>
        </section>
    );
}

export default ServiceSection;
