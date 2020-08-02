import React from 'react';
import onelookin_logo from '../assets/images/onelookinlogo3.png';
import ecapsule_logo from '../assets/images/ecapsule-logo.png';
import mdny_logo from '../assets/images/mdny-logo.png';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'One Look In',
                    subTitle: 'Free to use music streaming service',
                    imgSrc: onelookin_logo,
                    link: 'https://onelookin.com/index.php',
                    selected: false

                },
                {
                    id: 1,
                    title: 'eCapsule',
                    subTitle: 'Online Time Capsule',
                    imgSrc: ecapsule_logo,
                    link: 'https://ecapsule.us/',
                    selected: false

                },
                {
                    id: 2,
                    title: 'MDNY FAQ Page',
                    subTitle: 'FAQ page for a company',
                    imgSrc: mdny_logo,
                    link: 'https://help.merchdirect.com/index.html',
                    selected: false

                }
            ]
        }
    }

    handleCardClick= (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        
        items.forEach(item => {
            if(item.id != id ) {
                item.selected = false;
            }
        })

        this.setState({
            items
        });

    }

    makeItems= (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    

}

export default Carousel;