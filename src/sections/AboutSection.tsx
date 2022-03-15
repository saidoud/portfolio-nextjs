import React from 'react';
import { Chip, Grid, Stack, Typography } from '@mui/material';
import { FaReact, FaHtml5, FaCss3, FaJs, FaAtlassian } from 'react-icons/fa';

import SectionContainer from 'components/ui-components/SectionContainer';

function AboutSection() {
    return (
        <SectionContainer id="about" title="About Me" bgColor="#131419">
            <Grid container spacing={5} justifyContent="center" alignItems={'center'}>
                <Grid item xs={12} md={5}>
                    <img src="/assets/undraw_react.svg" height={'auto'} width={'100%'} loading="lazy" />
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography component="p" variant="body1" sx={{ mb: 2 }}>
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development
                        started back in 2012 when I decided to try editing custom Tumblr themes turns out hacking together a custom reblog
                        button taught me a lot about HTML & CSS!
                    </Typography>
                    <Typography component="p" variant="body1" sx={{ mb: 2 }}>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
                        corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products
                        and digital experiences at Upstatement for a variety of clients.
                    </Typography>
                    <Typography component={'p'} variant="body1" sx={{ mb: 2 }}>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node
                        & React.
                    </Typography>
                    <Typography component={'p'} variant="body1" sx={{ mb: 4 }}>
                        Here are a few technologies I’ve been working with recently:
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Chip sx={{ backgroundColor: '#E34F26', px: 1 }} icon={<FaHtml5 />} label="HTML" />
                        <Chip sx={{ backgroundColor: '	#264de4', px: 1 }} icon={<FaCss3 />} label="CSS" />
                        <Chip sx={{ backgroundColor: '#f0db4f', color: '#000', px: 1 }} icon={<FaJs color="#000" />} label="JavaScript" />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Chip sx={{ backgroundColor: '#61DAFB', color: '#000', px: 1 }} icon={<FaReact color="#000" />} label="React" />
                        <Chip sx={{ px: 1 }} icon={<FaAtlassian color="#fff" />} label="Next" />
                        <Chip
                            sx={{ backgroundColor: '#61DAFB', color: '#000', px: 1 }}
                            icon={<FaReact color="#000" />}
                            label="React Native"
                        />
                    </Stack>
                </Grid>
            </Grid>
        </SectionContainer>
    );
}

export default AboutSection;
