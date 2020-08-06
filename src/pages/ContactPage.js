import React from 'react';
import ContactForm from '../components/ContactForm';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero';

function ContactPage(props) {
    return(
       <Container className="" sm={12} fluid={true}> 
         <Hero title={props.subTitle} />
                <Container className="p-5">
                    <ContactForm className="contact-form" />
                </Container>
       </Container> 
    )
} 

export default ContactPage;