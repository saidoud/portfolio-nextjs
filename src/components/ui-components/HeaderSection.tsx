import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import GradientText from './GradientText';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container>
            <Divider textAlign="left" sx={{ width: { xs: '70%', md: '40%' } }}>
                <Typography component="p" variant="h5" align="center" color="primary">
                    {title}
                </Typography>
            </Divider>
        </Container>
    );
}

export default HeaderSection;
