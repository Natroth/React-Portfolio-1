import React from 'react';

import {useSpring, animated} from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})


    return(
        <animated.div className="n-card-info" style={style}>
            <p className="n-card-title">{props.title}</p>
            <p className="n-card-subtitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <br />
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>            
        </animated.div>
    );
}

export default CardInfo