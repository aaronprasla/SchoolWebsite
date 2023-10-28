import { useState, React } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import Gallery from './home_components/SchoolGallery';
import Carousely from './home_components/Carousel.jsx';
import Right from './home_components/RightSideGallery.jsx';
import './Home.css'


function Home() {
    return (
        <>
            <div className='column'>
                <Gallery></Gallery>
            </div>
            <div className='column-center'>
                <Carousely />
            </div>
            <div className='column'>
                <Right />
            </div>
        </>
    );
}

export default Home