import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import GradientText from './GradientText';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container maxWidth="xs" sx={{ textAlign: 'center', my: 4 }}>
            <Typography component="p" variant="h4">
                <GradientText>{title}</GradientText>
            </Typography>
            <Box
                sx={{
                    display: 'block',
                    height: 4,
                    borderRadius: 6,
                    width: 50,
                    my: 1.5,
                    mx: 'auto',
                    background: 'linear-gradient(270deg,rgb(19, 173, 199) 0%,rgb(148, 93, 214) 100%)'
                }}
            />
        </Container>
    );
}

export default HeaderSection;
