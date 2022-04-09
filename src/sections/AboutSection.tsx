import React from 'react';
import { Card, CardMedia, Chip, Grid, Stack, Typography } from '@mui/material';
import { FaReact, FaHtml5, FaCss3, FaJs, FaAtlassian, FaNodeJs } from 'react-icons/fa';

import SectionContainer from 'components/ui-components/SectionContainer';
import SkillsItem from 'components/SkillsItem';

function AboutSection() {
    return (
        <SectionContainer id="about" title="About Me" bgColor="#101010">
            <>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={5}>
                        {/* <Card sx={{ p: 2, height: '100%', background: '#161C24' }}>
                        <CardMedia component={'img'} src="/assets/undraw_react.svg" height={'auto'} width={'100%'} loading="lazy" />
                    </Card> */}
                        <img src="/assets/undraw_react.svg" height={'auto'} width={'100%'} loading="lazy" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography component="p" variant="body1" sx={{ mb: 2 }}>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development
                            started back in 2012 when I decided to try editing custom Tumblr themes turns out hacking together a custom
                            reblog button taught me a lot about HTML & CSS!
                        </Typography>
                        <Typography component="p" variant="body1" sx={{ mb: 2 }}>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
                            corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
                            products and digital experiences at Upstatement for a variety of clients.
                        </Typography>
                        <Typography component={'p'} variant="body1" sx={{ mb: 2 }}>
                            I also recently launched a course that covers everything you need to build a web app with the Spotify API using
                            Node & React.
                        </Typography>
                        <Typography component={'p'} variant="body1" sx={{ mb: 4 }}>
                            Here are a few technologies I’ve been working with recently:
                        </Typography>
                    </Grid>
                </Grid>
                {/* Skills */}
                <Stack direction={'row'} justifyContent="space-between" sx={{ pt: 6 }}>
                    {skills.map((item, index) => (
                        <SkillsItem name={item.name} color={item.color} Icon={item.Icon} />
                    ))}
                </Stack>
            </>
        </SectionContainer>
    );
}

const skills = [
    {
        id: 1,
        name: 'HTML',
        color: '#E34F26',
        Icon: FaHtml5
    },
    {
        id: 2,
        name: 'CSS',
        color: '#264de4',
        Icon: FaCss3
    },
    {
        id: 3,
        name: 'JavaScript',
        color: '#f0db4f',
        Icon: FaJs
    },
    {
        id: 4,
        name: 'React',
        color: '#61DAFB',
        Icon: FaReact
    },
    {
        id: 5,
        name: 'Node js',
        color: '#E34F26',
        Icon: FaNodeJs
    }
];

export default AboutSection;
