import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-5 bg-white">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 w-auto" md={3} sm={12}>
                    Built with React
                    </Col>
                    <Col className="d-flex justify-content-around bottom-links">
                        <a href="https://www.linkedin.com/in/nathan-roth-260b31187/" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Natroth" target="_blank"><i class="fa fa-github"></i></a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end w-auto" md={3} sm={12}>
                    Nathan Roth
                    </Col>
                </Row>
            </Container>   
        </footer>   
    ) 
}

export default Footer;