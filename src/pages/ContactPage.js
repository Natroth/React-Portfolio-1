import React from 'react';
import ContactForm from '../components/ContactForm';
import Container from 'react-bootstrap/Container';

function ContactPage(props) {
    return(
       <Container className="p-5" sm={12} fluid={true}> 
        <ContactForm />
       </Container> 
    )
} 

export default ContactPage;