import React, { useState } from 'react';
import './ContactUs.css';  // Import CSS for styling
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });  // Reset error for the field
    setSubmissionError(''); // Reset submission error
  };

  // Validate the form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);

      // Send form data to the backend
      try {
        const response = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        console.log('Form Data Submitted:', formData);
        
        // Clear the form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        // setSubmissionError('There was an error submitting the form. Please try again later.');
        console.error('Error submitting form:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='contact_us_container'>
      <h1>Contact Us</h1>
      {isSubmitted && <p className='success_message'>Thank you for contacting us!</p>}
      {submissionError && <span className='error'>{submissionError}</span>}
      <form onSubmit={handleSubmit}>
        <div className='form_group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className='error'>{errors.name}</span>}
        </div>
        <div className='form_group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form_group'>
          <label htmlFor='subject'>Subject:</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className='error'>{errors.subject}</span>}
        </div>
        <div className='form_group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className='error'>{errors.message}</span>}
        </div>
        <button type='submit'>Submit</button>
      </form>

      <button onClick={() => { nav('/') }} className='contact_go_to_home_btn'>Go to Home Page &rarr;</button>
    </div>
  );
};

export default ContactUs;
