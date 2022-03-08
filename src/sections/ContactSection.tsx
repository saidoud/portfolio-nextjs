import { Button, Card, CardActions, CardContent, Container, Grid, TextField } from '@mui/material';
import HeaderSection from 'components/ui-components/HeaderSection';
import React from 'react';

function ContactSection() {
    return (
        <section id="contact">
            <HeaderSection title="Contact us" />
            <Container sx={{ py: 4 }}>
                <Card>
                    <CardContent>
                        <Grid container spacing={4}>
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
                                <Button variant="contained">Send Message</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
}

export default ContactSection;
