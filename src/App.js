import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Nathan Roth',
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"},                
      ],
      home: {
        title: 'Create the Future',
        subTitle: 'building apps and websites',
        text: 'more text!'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'send me a message'
      }
    }
  }

  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Nathan Roth</Navbar.Brand>
            <Navbar.Toggle  aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse> 

          </Navbar> 

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact"  render={() => <ContactPage title={this.state.contact.title} />} />

        <Footer />

        </Container>
      </Router> 
    )
  };
}

export default App;
