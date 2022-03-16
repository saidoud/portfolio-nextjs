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
                <Typography
                    component="p"
                    variant="h3"
                    align="center"
                    fontWeight={700}
                    sx={(theme) => ({
                        pb: theme.spacing(4),
                        textTransform: 'capitalize',
                        background: 'linear-gradient( 121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15% )',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    })}
                >
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
