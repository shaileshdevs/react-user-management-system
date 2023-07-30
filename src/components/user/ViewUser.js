import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewUser = () => {

	const { userId } = useParams();
	const initialState = { name: "", username: "", email: "", phone: "", website: "" }
	const [user, setUser] = useState( initialState );
	const [ address, setAddress ] = useState( {} );
	const [ company, setCompany ] = useState( {} );

	useEffect(() => {
		fetchuser();
	}, []);

	const fetchuser = async () => {
		const response = await axios.get( `http://localhost:5002/users/${userId}` );
		setUser( response.data );
		setAddress( response.data.address );
		setCompany( response.data.company );
	}

  return (
    <div className="container">
		<Link to="/" class="btn btn-outline-info mt-2">Back</Link>
		<p class="display-2">User Id {user.id}</p>
		<ListGroup variant="flush">
			<ListGroup.Item><h4>Full Name</h4> {user.name}</ListGroup.Item>
			<ListGroup.Item><h4>Username</h4> {user.username}</ListGroup.Item>
			<ListGroup.Item><h4>Email</h4> {user.email}</ListGroup.Item>
			<ListGroup.Item><h4>Phone</h4> {user.phone}</ListGroup.Item>
			<ListGroup.Item><h4>Website</h4> {user.website}</ListGroup.Item>
			<ListGroup.Item><h4>Address</h4> {address.street} | {address.city}</ListGroup.Item>
			<ListGroup.Item><h4>Company</h4> {company.name} | {company.bs}</ListGroup.Item>
		</ListGroup>
    </div>
  )
}

export default ViewUser;