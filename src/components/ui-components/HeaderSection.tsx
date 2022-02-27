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
                sx={(theme) => ({
                    display: 'block',
                    height: 3,
                    borderRadius: 6,
                    width: 50,
                    mx: 'auto',
                    backgroundColor: theme.palette.success.light
                })}
            />
        </Container>
    );
}

export default HeaderSection;
