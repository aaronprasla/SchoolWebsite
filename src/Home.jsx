import { useState, React } from 'react';
import Gallery from './home_components/SchoolGallery';
import Carousely from '/Users/aaron/school-website/src/home_components/Carousel.jsx';
import News from '/Users/aaron/school-website/src/home_components/QuickNews.jsx';

import { Container, Row, Col, Stack } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Container>
                <Row className='flex'>
                    <Col xs={6} md={4}>
                        <Gallery />
                    </Col>
                    <Col xs={6} md={4}>
                        <Carousely />
                        <News />
                    </Col>
                    <Col xs={6} md={4}>
                        hi
                    </Col>
                </Row>
            </Container >


        </>
    );
}

export default Home