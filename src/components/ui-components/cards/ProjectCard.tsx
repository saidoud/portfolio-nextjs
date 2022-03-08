import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function ProjectCard({ title, image }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5
            }}
        >
            <Card>
                <CardMedia component={'img'} src={image} height={220} loading="lazy" />
                <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                        Antarctica
                    </Typography>
                    {/* <Stack
                        direction="row"
                        justifyContent={'center'}
                        alignItems="center"
                        spacing={1}
                        sx={(theme) => ({
                            pt: theme.spacing(1)
                        })}
                    >
                        <Chip icon={<AcUnitIcon />} label="React" color="success" variant="outlined" />
                        <Chip icon={<AcUnitIcon />} label="Firebase" color="warning" />
                        <Chip icon={<AcUnitIcon />} label="Redux" color="info" />
                    </Stack> */}
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </motion.div>
    );
}

export default ProjectCard;
