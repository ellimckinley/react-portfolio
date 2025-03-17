import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const ContactPage = () => {
    return (
        <Container maxWidth="sm" className="mt-5">
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Me
            </Typography>
            <Box
                component="form"
                className="p-4 rounded bg-secondary-custom"
                noValidate
                autoComplete="off"
                sx={{ color: 'black' }}
            >
                <TextField
                    fullWidth
                    margin="normal"
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    required
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    required
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    required
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="message"
                    label="What would you like to say?"
                    name="message"
                    multiline
                    rows={4}
                    required
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                />
                <Button variant="contained" type="submit" className="btn-accent-custom mt-3">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default ContactPage;