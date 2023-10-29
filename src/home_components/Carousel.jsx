import { React } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel, CardGroup } from 'react-bootstrap'
import Motto from '../assets/Motto.jpg'
import register from '../assets/registerlogo.jpeg'
import building from '../assets/buildingmac.jpeg'
import './Carousel.css'

function Carousely() {
    return (
        <>
            <Stack className='stackS' style={{ marginTop: '6.07rem' }}>
                <Carousel pause='hover'>
                    <Carousel.Item className='bg-red' >
                        <img src={register} style={{ width: '100%' }}></img>
                        <Carousel.Caption>
                            <h3>Want To Register With Us!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Motto} style={{ width: '100%' }}></img>
                        <Carousel.Caption>
                            <h3>Our Motto</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={building} style={{ width: '100%' }}></img>
                        <Carousel.Caption>
                            <h3>Building of Jack MacKenzie</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Stack>

            <CardGroup className='sm-1 md-3' data-bs-theme="dark" border='light' style={{ marginBottom: '1rem' }}>
                <Card border='light'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>News#1</Card.Title>
                        <Card.Text>
                            Insert news text
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date</small>
                    </Card.Footer>
                </Card>
                <Card border='light'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>News#2</Card.Title>
                        <Card.Text>
                            Insert news text
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date</small>
                    </Card.Footer>
                </Card>
                <Card border='light'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>News#3</Card.Title>
                        <Card.Text>
                            Insert news text
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Date</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    );
}

export default Carousely