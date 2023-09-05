import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactForm() {
    const [formData, setFormData] = useState({
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
    
    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in formData) {
            if (formData[key] === '') {
                setFormErrors((formErrors) => ({
                    ...formErrors,
                    [key]: 'This field is required'
                }));
            } else {
                setFormErrors((formErrors) => ({
                    ...formErrors,
                    [key]: ''
                }));
            }
        }

        console.log('clicked submit');
        console.log(formData);
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
        >
            <TextField 
                fullWidth 
                id="name" 
                label="Name" 
                variant="outlined" 
                margin='normal'
                value={formData.name}
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
                value={formData.email}
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
                value={formData.subject}
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
                value={formData.message}
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

function contactform() {
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange}
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="subject" 
        placeholder="Subject" 
        value={formData.subject} 
        onChange={handleChange}
      />
      <textarea 
        name="message" 
        placeholder="Message" 
        value={formData.message} 
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
