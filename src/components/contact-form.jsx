import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to your backend
    };

    return (
        <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth id="name" label="Name" variant="outlined" margin='normal'/>
            <TextField fullWidth id="email" label="Email" variant="outlined" margin='normal'/>
            <TextField fullWidth id="subject" label="Subject" variant="outlined" margin='normal'/>
            <TextField fullWidth multiline rows={5} id="message" label="Message" variant="outlined" margin='normal'/>
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
