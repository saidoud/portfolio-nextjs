import React, { useState } from 'react';
import { Chip, Container, Grid, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from 'components/ui-components/cards/ProjectCard';
import SectionContainer from 'components/ui-components/SectionContainer';

function ProjectSection() {
    const [selected, setSelected] = useState(1);
    const [projectData, setProjectData] = useState(project);

    const handleFilter = (item: number) => {
        setSelected(item);
        if (item === 1) setProjectData(project);
        else setProjectData(project.filter((data) => data.groupId === item));
    };

    return (
        <SectionContainer id="project" title="Project" bgColor="#0A1929">
            {/* Filter Section */}
            <>
                <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={3} sx={{ my: 4, mx: 2 }}>
                    {filter.map((item) => (
                        <Chip
                            key={item.id}
                            variant={selected === item.id ? 'filled' : 'outlined'}
                            onClick={() => handleFilter(item.id)}
                            label={item.name}
                            color={selected === item.id ? 'primary' : 'default'}
                        />
                    ))}
                </Stack>
                {/* Project  */}
                <motion.div layout>
                    <Grid container spacing={4}>
                        <AnimatePresence>
                            {projectData.map((item) => (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <ProjectCard title={item.title} image={item.image} />
                                </Grid>
                            ))}
                        </AnimatePresence>
                    </Grid>
                </motion.div>
            </>
        </SectionContainer>
    );
}

const filter = [
    {
        id: 1,
        name: 'all'
    },
    {
        id: 2,
        name: 'web app'
    },
    {
        id: 3,
        name: 'landing page'
    },
    {
        id: 4,
        name: 'mobile app'
    }
];
const project = [
    {
        id: 1,
        title: 'Ecommerce Project',
        image: '/assets/project1.png',
        groupId: 1
    },
    {
        id: 2,
        title: 'Chat Project',
        image: '/assets/project2.png',
        groupId: 1
    },
    {
        id: 3,
        title: 'NFT Project',
        image: '/assets/project1.png',
        groupId: 1
    },
    {
        id: 4,
        title: 'Facebook Project',
        image: '/assets/project2.png',
        groupId: 2
    },
    {
        id: 5,
        title: 'Instagram Project',
        image: '/assets/project1.png',
        groupId: 2
    },
    {
        id: 6,
        title: 'Google Project',
        image: '/assets/project2.png',
        groupId: 3
    },
    {
        id: 7,
        title: 'Linkedin Project',
        image: '/assets/project1.png',
        groupId: 3
    },
    {
        id: 8,
        title: 'Messenger Project',
        image: '/assets/project2.png',
        groupId: 4
    },
    {
        id: 9,
        title: 'NFT Project',
        image: '/assets/project1.png',
        groupId: 4
    }
];

export default ProjectSection;
