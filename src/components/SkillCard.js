import React from 'react';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SkillCard(props) {
    return(
        <Image className="tech-img" src={props.src} alt={props.src} />
    )
}

export default SkillCard;