import React from 'react';
import { Button, Card, CardContent, Box, Grid, TextField } from '@mui/material';
import SectionContainer from 'components/ui-components/SectionContainer';

function ContactSection() {
    return (
        <SectionContainer id="contact" title="Contact Us">
            <Card variant="outlined">
                <CardContent>
                    <Grid container rowSpacing={3} spacing={4}>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-required" label="Name" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-required" label="Email" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-required" label="Subject" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Message" multiline rows={4} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="contained">Send Message</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </SectionContainer>
    );
}

export default ContactSection;
