import React from 'react';
import { Card, Box, Grid, Typography, CardContent } from '@mui/material';
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';

import Avatar from '../extended/Avatar';
import { useTheme } from '@mui/material/styles';

interface ServiceCardProps {
    title: string;
}
// Props : {Icon / Title / Description /}
function ServiceCard({ title }: ServiceCardProps) {
    const theme = useTheme();
    return (
        <Card elevation={0} sx={{ background: 'transparent' }}>
            <Grid container justifyContent="center" textAlign={'center'} spacing={1}>
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
        </Card>
    );
}

export default ServiceCard;
