import React from 'react';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';

interface ServiceCardProps {
    title: string;
}
// Props : {Icon / Title / Description /}
function ServiceCard({ title }: ServiceCardProps) {
    return (
        <Card elevation={2}>
            <CardContent>
                <Grid container justifyContent="center" textAlign={'center'} spacing={2}>
                    <Grid item>
                        <PaletteTwoToneIcon fontSize="large" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component={'h3'} variant="h5">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Warm color palates and minimally designed interfaces make the user experience more comfortable.
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;
