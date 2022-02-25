import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import GradientText from './GradientText';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container maxWidth="xs" sx={{ textAlign: 'center' }}>
            <Typography component="p" variant="h4">
                <GradientText color="error">{title}</GradientText>
            </Typography>
            <Box
                sx={(theme) => ({
                    display: 'block',
                    height: 3,
                    width: 50,
                    my: 1.5,
                    mx: 'auto',
                    backgroundColor: theme.palette.primary.light
                })}
            />
        </Container>
    );
}

export default HeaderSection;
