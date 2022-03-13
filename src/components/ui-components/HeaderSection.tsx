import React from 'react';
import { Container, Divider, Typography, Box } from '@mui/material';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container>
            <Typography component="p" variant="h5" color="primary" gutterBottom sx={{ textTransform: 'capitalize' }}>
                {title}
            </Typography>
            <Box sx={(theme) => ({ width: 60, borderRadius: 5, height: 5, backgroundColor: theme.palette.primary.light })} />
        </Container>
    );
}

export default HeaderSection;
