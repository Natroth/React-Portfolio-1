import React from 'react';
import onelookin_logo from '../assets/images/onelookinlogo3.png';
import ecapsule_logo from '../assets/images/logoposs.png';
import knifes_logo from '../assets/images/knifes.png';
import yayornay_logo from '../assets/images/yay_or_nay.png';
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
                    codeLink: 'https://github.com/Natroth/OneLookIn',
                    selected: false

                },
                {
                    id: 1,
                    title: 'Pantry Chef',
                    subTitle: 'Recipe Lookup',
                    imgSrc: knifes_logo,
                    link: 'https://pantrychef.lynxic.com/',
                    codeLink: 'https://github.com/Natroth/recipe-app',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Yay Or Nay',
                    subTitle: 'Movie Rating',
                    imgSrc: yayornay_logo,
                    link: 'https://yayornay.lynxic.com/',
                    codeLink: 'https://github.com/Natroth/yay-or-nay',
                    selected: false

                },
                {
                    id: 3,
                    title: 'eCapsule',
                    subTitle: 'Online Time Capsule',
                    imgSrc: ecapsule_logo,
                    link: 'https://ecapsule.us/',
                    codeLink: 'https://github.com/Natroth/eCapsule',
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
                <Row className="justify-content-around p-card-container">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    

}

export default Carousel;