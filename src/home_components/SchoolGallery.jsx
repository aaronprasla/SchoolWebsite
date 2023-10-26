import { useState, React, useEffect } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel } from 'react-bootstrap'
import { App } from 'antd';
import cover from '/Users/aaron/school-website/src/assets/SchoolGalcover.jpeg'
import { Tweet } from 'react-tweet'


function Gallery() {

	return (
		<>


			<Card style={{ marginTop: '96px', width: '100%' }} bg='dark' text='white' variant='top'>
				<Card.Img variant="dark" fixed='top' className='w-100' src={cover} />
				<Card.Body>
					<Card.Title>School Gallery</Card.Title>
					<Card.Text>
						Always Smiling!
					</Card.Text>
					<CardLink className='link-light text-decoration-none' href='#'>View The Whole Gallery</CardLink>
				</Card.Body>
			</Card>

			<Card bg='dark' className='mt-3' text='white' style={{ width: '100%' }}>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.614780581064!2d-104.5306418236727!3d50.42964848886169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531ea0016ca9df97%3A0x935e145cb0839d3f!2sJack%20MacKenzie%20School!5e0!3m2!1sen!2sca!4v1696177677633!5m2!1sen!2sca" style={{ border: '0', width: '100%' }} loading="lazy"></iframe>
				<Card.Body>
					<Card.Title>School Area Map</Card.Title>
				</Card.Body>
			</Card>

		</>
	);
}

export default Gallery