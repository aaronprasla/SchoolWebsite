import { React } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel } from 'react-bootstrap'
import Motto from '/Users/aaron/school-website/src/assets/Motto.jpg'
import register from '/Users/aaron/school-website/src/assets/registerlogo.jpeg'
import building from '/Users/aaron/school-website/src/assets/buildingmac.jpeg'
import '/Users/aaron/school-website/src/home_components/Carousel.css'

function Carousely() {
    return (
        <Stack className='position-absolute top-0 start-50 translate-middle-x' sm={1} style={{ marginTop: '6.5rem' }}>
            <Carousel style={{ float: 'top' }} pause='hover'>
                <Carousel.Item className='bg-red' >
                    <img src={register} className='w-100'></img>
                    <Carousel.Caption>
                        <h3>Want To Register With Us!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Motto} className='w-100'></img>
                    <Carousel.Caption>
                        <h3>Our Motto</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={building} className='w-100'></img>
                    <Carousel.Caption>
                        <h3>Building of Jack MacKenzie</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Stack>
    );
}

export default Carousely