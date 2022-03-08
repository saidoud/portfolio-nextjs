import { Button, Container, Grid, Stack } from '@mui/material';
import ProjectCard from 'components/ui-components/cards/ProjectCard';
import HeaderSection from 'components/ui-components/HeaderSection';
import React, { useState } from 'react';

function ProjectSection() {
    const [selected, setSelected] = useState('all');

    const handleFilter = (item) => {
        setSelected(item);
    };
    return (
        <section id="project" style={{ height: 500 }}>
            <HeaderSection title="Project" />
            <Container>
                {/* Filter Section */}
                <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={4} sx={{ my: 4 }}>
                    {filter.map((item, index) => (
                        <Button
                            key={index}
                            variant={selected === item ? 'contained' : 'text'}
                            size="small"
                            sx={{ textTransform: 'capitalize' }}
                            onClick={() => handleFilter(item)}
                        >
                            {item}
                        </Button>
                    ))}
                </Stack>

                {/* Project  */}
                <Grid container spacing={4}>
                    {project.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <ProjectCard title={item.title} image={item.image} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const filter = ['all', 'web app', 'landing page', 'mobile app'];
const project = [
    {
        id: 1,
        title: 'Ecommerce Project',
        image: '/assets/project1.png'
    },
    {
        id: 2,
        title: 'Chat Project',
        image: '/assets/project2.png'
    },
    {
        id: 3,
        title: 'NFT Project',
        image: '/assets/project1.png'
    }
];

export default ProjectSection;
