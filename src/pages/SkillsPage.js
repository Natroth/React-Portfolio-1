import React from 'react';
import html_logo from '../assets/images/html_logo.png';
import css_logo from '../assets/images/css_logo.png';
import js_logo from '../assets/images/js_logo.png';
import php_logo from '../assets/images/php_logo.svg';
import node_logo from '../assets/images/node_logo.png';
import python_logo from '../assets/images/python_logo.png';
import react_logo from '../assets/images/react_logo.png';
import react_bootstrap_logo from '../assets/images/react_bootstrap_logo.png';


import SkillCard from '../components/SkillCard';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Hero';

class SkillsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = 
              [
              {name:"html", src: html_logo},
              {name:"css", src: css_logo},    
              {name:"js", src: js_logo},   
              {name:"php", src: php_logo},   
              {name:"node", src: node_logo},
              {name:"python", src: python_logo},    
              {name:"react", src: react_logo},   
              {name:"react", src: react_bootstrap_logo},                                                   
          ]
        
    }
    
    render() {
    return(

        <div> 
         <Hero title='Skills' />
            <div className="tech-img-wrap">
                <Row className= "justify-content-center">
                    <SkillCard src={this.state[0].src} />
                    <SkillCard src={this.state[1].src} />
                    <SkillCard src={this.state[2].src} />
                </Row>

                <Row className= "justify-content-center">
                    <SkillCard src={this.state[3].src} />
                    <SkillCard src={this.state[4].src} />
                </Row>

                <Row className= "justify-content-center">
                    <SkillCard src={this.state[5].src} />            
                    <SkillCard src={this.state[6].src} />  
                    <SkillCard src={this.state[7].src} />              
                </Row>    
            </div>
        </div>    
    );
    }
}

export default SkillsPage;