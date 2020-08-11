import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





class ContactForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });

    
  }

  render() {



    return(
        <Form>
  <Form.Group onSubmit={this.handleSubmit} controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter full Name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="4" placeholder="Enter your message" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>

    )
}

}



export default ContactForm;