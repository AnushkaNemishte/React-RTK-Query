import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useGetUserQuery } from '../services/api';
import { FaEye, FaTrash, FaPlus } from "react-icons/fa";

function Users() {
  const responseInfo = useGetUserQuery()
  console.log(responseInfo)
  return (
    <div className='container-fluid' >
      <Row className='custom-padding center-items'>
        <Col xs={8}>
          <h1>Users Details</h1>
        </Col>
        <Col xs={2}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
        </Col>
        <Col xs={2}>
          <div className="d-flex justify-content-end">
            <Button variant='primary'><FaPlus />New Entry</Button>
          </div>
        </Col>
      </Row>
      <Table striped bordered >
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            responseInfo.data && responseInfo.data.map((items) => {
              return (
                <tr key={items.id}>
                  <th>{items.id}</th>
                  <th>{items.name}</th>
                  <th>{items.email}</th>
                  <th>{items.contact}</th>
                  <th  >
                    <Button variant='warning'>
                      <FaEye />
                      View</Button>
                  </th>
                  <th  >
                    <Button variant='danger'>
                      <FaTrash />
                      Delete</Button>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
