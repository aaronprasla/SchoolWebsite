import { useState, React, useEffect } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel } from 'react-bootstrap'
import { App } from 'antd';
import cover from '../assets/SchoolGalcover.jpeg'

function Gallery() {

	return (
		<>


			<Card style={{ width: '100%', marginTop: '6rem' }} bg='dark' text='white' variant='top'>
				<Card.Img variant="dark" fixed='top' className='w-100' src={cover} />
				<Card.Body>
					<Card.Title>School Gallery</Card.Title>
					<Card.Text>
						Always Smiling!
					</Card.Text>
				</Card.Body>
			</Card>
			<Card bg='dark' className='mt-3' text='white' style={{ width: '100%' }}>
				<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FRegina&title=Upcoming%20Events&hl=en&showTz=1&showCalendars=1&showTabs=0&showPrint=0&src=bjc4N2Jya2o5bWZqaTNpYWNzaDAwdDdtYzBqMG5yaTdAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F09300" style={{ width: '100%' }} frameBorder="0" scrolling="no"></iframe>
				<Card.Body>
					<Card.Title>Event Calendar</Card.Title>
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