
//import main components
import React from 'react';
import './profilepage.styles.css';

//import react strap components
import { Card, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

//import pages and components
import CustomInput from '../../components/custominput/custominput.component';

class ProfilePage extends React.Component{
    constructor() {
        super();
        
        this.state = {

        }
    }

    render(){
        return(
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col sm={12} lg={6}>
                            <Card className='card-component'>
                                <Card.Img variant="top" src="https://scontent.fayt2-1.fna.fbcdn.net/v/t39.30808-6/274128680_5015540095134590_2909184389059920027_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7_iyh-jVzU8AX-FBl6f&_nc_ht=scontent.fayt2-1.fna&oh=00_AT_vTEcCs0FVUoQ8p49uAVVqEWbNdSaSfPD0EQIu9W1M0A&oe=621F6DD0" />
                                <Card.Body>
                                    <Card.Title>Bahadır Ustabaşı</Card.Title>
                                    <Card.Text>
                                        Merhaba ben bahadır şöyle böyle bir insanım bu da açıklamam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, qui?
                                    </Card.Text>
                                    <Button variant="primary">Contact Bahadır</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} lg={6}>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                                <FormControl
                                placeholder="Bahadir"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                
            </div>

            
        )
    }
    
}

export default ProfilePage;