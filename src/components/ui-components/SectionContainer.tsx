import React from 'react';
import { Container, Typography, Box } from '@mui/material';

interface SectionProps {
    id: string;
    title: string;
    bgColor?: string;
    children?: JSX.Element;
}
function SectionContainer({ id, title, bgColor, children }: SectionProps) {
    return (
        <section id={id}>
            <Box
                sx={(theme) => ({
                    backgroundColor: bgColor ? bgColor : 'inherit',
                    py: theme.spacing(6)
                })}
            >
                <Typography component="p" variant="h4" align="center" color="primary" sx={{ textTransform: 'capitalize' }}>
                    {title}
                </Typography>
                <Container
                    sx={(theme) => ({
                        mt: theme.spacing(2)
                    })}
                >
                    {children}
                </Container>
            </Box>
        </section>
    );
}

export default SectionContainer;
