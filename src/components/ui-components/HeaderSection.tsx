import React from 'react';
import { Container, Divider, Typography } from '@mui/material';

interface HeaderSectionProps {
    title: string;
}

function HeaderSection({ title }: HeaderSectionProps) {
    return (
        <Container maxWidth="xs">
            <Divider>
                <Typography component="p" variant="h4" align="center" color="primary">
                    {title}
                </Typography>
            </Divider>
        </Container>
    );
}

export default HeaderSection;
