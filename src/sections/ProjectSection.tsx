import { Button, Container, Stack } from '@mui/material';
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
            <Container sx={{ mt: 4 }}>
                {/* Filter Section */}
                <Stack direction="row" justifyContent={'center'} alignItems="center" spacing={4}>
                    {filter.map((item, index) => (
                        <Button
                            key={index}
                            variant={selected === item ? 'contained' : 'text'}
                            size="small"
                            onClick={() => handleFilter(item)}
                        >
                            {item}
                        </Button>
                    ))}
                </Stack>
            </Container>
        </section>
    );
}

const filter = ['all', 'web app', 'landing page', 'mobile app'];

export default ProjectSection;
