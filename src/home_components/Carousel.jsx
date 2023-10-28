import { React } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel, CardGroup } from 'react-bootstrap'
import Motto from '../assets/Motto.jpg'
import register from '../assets/registerlogo.jpeg'
import building from '../assets/buildingmac.jpeg'
import './Carousel.css'

function Carousely() {
    return (
        <>
            <Stack style={{ marginTop: '6.07rem' }}>
                <Carousel style={{ float: 'top' }} pause='hover'>
                    <Carousel.Item className='bg-red' >
                        <img src={register} style={{width: '100%'}}></img>
                        <Carousel.Caption>
                            <h3>Want To Register With Us!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Motto} style={{width: '100%'}}></img>
                        <Carousel.Caption>
                            <h3>Our Motto</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={building} style={{width: '100%'}}></img>
                        <Carousel.Caption>
                            <h3>Building of Jack MacKenzie</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Stack>

            <CardGroup className='sm-1 md-3'>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    );
}

export default Carousely