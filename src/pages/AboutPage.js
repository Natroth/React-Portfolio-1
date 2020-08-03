import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content.js';

function AboutPage(props) {
    return(
       <div> 
        <Hero title={props.title} />

        <Content>
            <p>
            Her hunger for knowledge and determination to turn information into action has contributed to 
            her most recent success at Rockwell Group. There, she led international award-winning campaign
            s for heavy-hitting brands such as Puma, Gucci, and Rolex.

        Meanwhile, she vastly improved the productivity of her department by implementi
        ng strategic project management methods and ensuring a work-life balance for her team. Madison believes m
        indfulness in the workplace is key to success, a tenet she lives out through her interests in yoga, meditation, g
        ardening, and painting.           
         </p>    
        </Content> 

       </div> 
    )
} 

export default AboutPage;