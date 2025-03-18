import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrorMessage({
            ...errorMessage,
            [name]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = formData;
        let errors = {};
        if (!firstName) errors.firstName = 'Please enter your first name.';
        if (!lastName) errors.lastName = 'Please enter your last name.';
        if (!email) {
            errors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!message) errors.message = 'Please enter your message.';

        if (Object.keys(errors).length > 0) {
            setErrorMessage(errors);
        } else {
            setErrorMessage({});
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    });
                }, (err) => {
                    console.log('FAILED...', err);
                    setErrorMessage({ submit: '🚧 Form under construction. Please contact me on LinkedIn.' });
                });
        }
    };

    return (
        <Container className="mt-5" id="contact">
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Me
            </Typography>
            <Box
                component="form"
                className="p-4 rounded bg-secondary-custom"
                noValidate
                autoComplete="off"
                sx={{ color: 'black' }}
                onSubmit={handleSubmit}
            >
                <TextField
                    fullWidth
                    margin="normal"
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    error={!!errorMessage.firstName}
                    helperText={errorMessage.firstName}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    error={!!errorMessage.lastName}
                    helperText={errorMessage.lastName}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    error={!!errorMessage.email}
                    helperText={errorMessage.email}
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
                    value={formData.message}
                    onChange={handleChange}
                    InputProps={{ style: { color: 'black', backgroundColor: 'white' } }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    error={!!errorMessage.message}
                    helperText={errorMessage.message}
                />
                {errorMessage.submit && (
                    <Typography color="error" variant="body2">
                        {errorMessage.submit}
                    </Typography>
                )}
                {successMessage && (
                    <Typography color="success" variant="body2">
                        {successMessage}
                    </Typography>
                )}
                <Button variant="contained" type="submit" className="btn-accent-custom mt-3">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default ContactPage;