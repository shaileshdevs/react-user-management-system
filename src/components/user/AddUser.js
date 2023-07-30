import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

	const navigate = useNavigate();
	const initialState = { name: "", username: "", email: "", phone: "", website: "" }
	const [user, setUser] = useState( initialState );

	const onChangeInput = ( event ) => {
		setUser({...user, [event.target.name]: event.target.value});
	}

	const onFormSubmit = async ( event ) => {
		event.preventDefault();

		if ( ! user.name ) {
			alert( "Name can not be empty" );
			return;
		}

		if ( ! user.username ) {
			alert( "Username can not be empty" );
			return;
		}

		if ( ! user.email ) {
			alert( "Email can not be empty" );
			return;
		}

		if ( ! user.phone ) {
			alert( "Phone can not be empty" );
			return;
		}

		if ( ! user.website ) {
			alert( "Website can not be empty" );
			return;
		}

		await axios.post( "http://localhost:5002/users", user );
		navigate( { pathname: '/' } );
	}

  return (
    <div className="container">
        <div className="w-75 mx-auto shadow-sm">
            <h2 className="text-center">Add User</h2>
			<form onSubmit={(event) => {onFormSubmit(event)}}>
			{/* <form> */}
				<div className="form-group mb-2">
					<input type="text"
						className="form-control form-control-lgz"
						placeholder="Enter your full name"
						name="name"
						value={user.name}
						onChange={( event ) => {
							onChangeInput( event );
						}}
					>
					</input>
				</div>
				<div className="form-group mb-2">
					<input type="text"
						className="form-control form-control-lgz"
						placeholder="Enter your username"
						name="username"
						value={user.username}
						onChange={( event ) => {
							onChangeInput( event );
						}}
					>
					</input>
				</div>
				<div className="form-group mb-2">
					<input type="text"
						className="form-control form-control-lgz"
						placeholder="Enter your email"
						name="email"
						value={user.email}
						onChange={( event ) => {
							onChangeInput( event );
						}}
					>
					</input>
				</div>
				<div className="form-group mb-2">
					<input type="text"
						className="form-control form-control-lgz"
						placeholder="Enter your phone number"
						name="phone"
						value={user.phone}
						onChange={( event ) => {
							onChangeInput( event );
						}}
					>
					</input>
				</div>
				<div className="form-group mb-4">
					<input type="text"
						className="form-control form-control-lgz"
						placeholder="Enter your website"
						name="website"
						value={user.website}
						onChange={( event ) => {
							onChangeInput( event );
						}}
					>
					</input>
				</div>
				{/* <button onClick={(event) => {onFormSubmit(event)}} type="submit" className="btn btn-info text-white col-12">Add User</button> */}
				<button type="submit" className="btn btn-info text-white col-12">Add User</button>
			</form>
        </div>
    </div>
  )
}

export default AddUser;