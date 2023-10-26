import { useState, React } from 'react';
import Gallery from './home_components/SchoolGallery';
import Carousely from '/Users/aaron/school-website/src/home_components/Carousel.jsx';
import News from '/Users/aaron/school-website/src/home_components/QuickNews.jsx';
import '/Users/aaron/school-website/src/Home.css'
import { Container, Row, Col, Stack } from 'react-bootstrap';

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
                hi
            </div>
        </>
    );
}

export default Home