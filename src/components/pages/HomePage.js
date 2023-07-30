import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await axios.get('http://localhost:5002/users')
      .then(function( response ){
        console.log( response.data   );
        setUsers( response.data.reverse() );
      })
      .catch(function( error ){

      });
  }

  const deleteUser = (userId) => {
    axios.delete( `http://localhost:5002/users/${userId}` );
    getAllUsers();
  }

  // if ( users.length < 1 ) {
  //   return <Spinner animation="grow"></Spinner>
  // } else {
    return (
      <div className="container">
        {
          users.length < 1 ? ( <Spinner animation="grow"></Spinner> ) : (
          <>
            <h2>User Management System</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map( (user, index) => {
                    return <tr key={index}>
                      <td>{ index + 1 }</td>
                      <td>{ user.name }</td>
                      <td>{ user.email }</td>
                      <td>{ user.phone }</td>
                      <td>
                        <Link className="btn btn-info me-2" to={`/users/view/${user.id}`}>View</Link>
                        <Link className="btn btn-outline-info me-2" to={`/users/edit/${user.id}`}>Edit</Link>
                        <Button onClick={() => { deleteUser(user.id) }} variant="danger">Delete</Button>
                      </td>
                    </tr>
                  } )
                }
                
              </tbody>
            </Table>
          </>
          )
        }
      </div>
    )
  // }
}

export default HomePage