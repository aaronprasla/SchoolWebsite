import { useState, React } from 'react'
import Gallery from './home_components/SchoolGallery';
import Carousely from '/Users/aaron/school-website/src/home_components/Carousel.jsx'
import { Container, Row } from 'react-bootstrap';

function Home() {
    return (
        <>

            <Gallery />
            <Carousely />

        </>
    );
}

export default Home