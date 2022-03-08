import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function ProjectCard({ title, image }) {
    return (
        <Card>
            <CardMedia component={'img'} src={image} height={220} />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
