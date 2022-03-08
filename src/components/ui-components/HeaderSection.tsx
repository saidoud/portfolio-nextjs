import React from 'react';
import { Container, Divider, Typography } from '@mui/material';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container>
            <Typography component="p" variant="h4" color="primary" gutterBottom>
                {title}
            </Typography>
        </Container>
    );
}

export default HeaderSection;
