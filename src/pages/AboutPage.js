import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content.js';

function AboutPage(props) {
    return(
       <div> 
        <Hero title={props.title} />

        <Content>
            <p className="site-description">
                I'm Nate, and this is a company I created to organize all the projects I've been working on. 
                Lynxic is a web development and design company that uses the most modern technologies
                to create stunning and effective websites and applications. All projects created under
                the Lynxic brand are not only beautifuly designed, but functionaly innovative. Feel free 
                to look through my current list of projects or message me directy at <a href="mailto:nathanrth15@gmail.com">nathanrth15@gmail.com</a>
                <br/><br/>
            </p>    
        </Content> 

       </div> 
    )
} 

export default AboutPage;