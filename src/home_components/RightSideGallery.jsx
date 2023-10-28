import { useState, React, useEffect } from 'react'
import { Card, Button, Stack, CardLink, Col, Carousel, ListGroup } from 'react-bootstrap'


function Right() {

	return (
		<>


			<Card style={{ width: '100%', marginTop: '6rem' }} bg='dark' text='white' variant='top'>
				<a href="https://sites.google.com/rbe.sk.ca/learningathome/home" target='_blank'>
					<Card.Img variant="dark" fixed='top' className='w-100' src={'https://jackmackenzie.rbe.sk.ca/sites/www.reginapublicschools.ca/files/assets/images/home_learning.png'} />
				</a>
				<Card.Body>
					<Card.Title>Home Learning</Card.Title>
					<Card.Text>
						Support your child at home.
					</Card.Text>
					<CardLink className='link-light text-decoration-none' href='https://sites.google.com/rbe.sk.ca/learningathome/home' target='_blank'>Click here or on the picture to find out more about this program.</CardLink>
				</Card.Body>
			</Card>

			<Card bg='dark' className='mt-3' text='white' style={{ width: '100%' }}>
				<ListGroup variant='flush' data-bs-theme="dark">
					<ListGroup.Item action href="https://www.reginapublicschools.ca/student_citizenship_award">Student Citizenship Awards</ListGroup.Item>
					<ListGroup.Item action href="https://www.reginapublicschools.ca/NRJU%20School%20Sodturning">Sodturning for NRJU School</ListGroup.Item>
					<ListGroup.Item action href="https://www.reginapublicschools.ca/Argyle%20Grand%20Opening">Argyle School Grand Opening</ListGroup.Item>
					<ListGroup.Item action href="https://www.reginapublicschools.ca/node/1108">Public Schools of Saskatchewan</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Title>District News</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
}

export default Right