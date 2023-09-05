import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { navigate } from 'gatsby';

function ContactForm() {
    const [myFormData, setMyFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    
    const handleChange = (e) => {
        const { id, value } = e.target;

        setMyFormData((myFormData) => ({
            ...myFormData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log('clicked submit');
        console.log(myFormData);
        e.preventDefault();
        if (error) setError(false);
        for (let key in myFormData) {
            if (myFormData[key] === '') {
                setFormErrors((formErrors) => ({
                    ...formErrors,
                    [key]: 'This field is required'
                }));
                setError(true);
                return;
            } else {
                setFormErrors((formErrors) => ({
                    ...formErrors,
                    [key]: ''
                }));
            }
        }
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...myFormData })
        })
            .then(() => navigate("/thank-you/"))
            .catch((error) => alert(error));
    };

    return (
        <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
                marginBottom: '5rem',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            name='contact-form'
            method='POST'
        >
            <input type="hidden" name="form-name" value="contact-form" />
            <TextField 
                fullWidth 
                id="name" 
                label="Name" 
                variant="outlined" 
                margin='normal'
                value={myFormData.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
            />
            <TextField 
                fullWidth 
                id="email" 
                label="Email" 
                variant="outlined" 
                margin='normal'
                value={myFormData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
            />
            <TextField 
                fullWidth 
                id="subject" 
                label="Subject" 
                variant="outlined" 
                margin='normal'
                value={myFormData.subject}
                onChange={handleChange}
                error={!!formErrors.subject}
                helperText={formErrors.subject}
            />
            <TextField 
                fullWidth 
                multiline 
                rows={5} 
                id="message" 
                label="Message" 
                variant="outlined" 
                margin='normal'
                value={myFormData.message}
                onChange={handleChange}
                error={!!formErrors.message}
                helperText={formErrors.message}
            />
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
            >
                Submit
            </Button>
        </Box>
    );
}

export default ContactForm;
