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
import chains_logo from './assets/images/gray_links.png';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';

import bridgeImg from './assets/images/bird-bridge1.JPG';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Nathan Roth',
      headerLinks: [
        {title: 'Home', path: "/"},
        {title: 'About', path: "/about"},
        {title: 'Contact', path: "/contact"},       
        {title: 'Skills', path: "/skills"},                        
      ],
      home: {
        title: 'Lynxic',
        subTitle: 'Web Design & Development',
        text: 'Build the Future'
      },
      about: {
        title: 'About...'
      },
      contact: {
        title: "Let's chat"
      }
    }
  }

  render() {
    return(
      <Router>
        <Container className="p-0" fluid={true}>
        <div class="background-img">
          <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand><img className="site-logo" src={chains_logo}></img></Navbar.Brand>
            <Navbar.Toggle  aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id = "navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/skills">Skills</Link>                    
                <Link className="nav-link" to="/contact">Contact</Link>            
              </Nav>
            </Navbar.Collapse> 

          </Navbar> 

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact"  render={() => <ContactPage subTitle={this.state.contact.title} />} />
          <Route path="/skills"  render={() => <SkillsPage />} />        

                <div  styles={{ backgroundImage:`url(${bridgeImg})` }}>
    </div>  

        <Footer />
          </div>
        </Container>
      </Router> 
    )
  };
}

export default App;
