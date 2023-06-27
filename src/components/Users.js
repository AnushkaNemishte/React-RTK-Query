import React from 'react';
import {Table} from 'react-bootstrap'
import { useGetUserQuery } from '../services/api';
function Users() {
    const responseInfo = useGetUserQuery()
    console.log(responseInfo)
  return (
    <div className='container '>
      <Table striped bordered >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
           {
            responseInfo.data && responseInfo.data.map((items) =>{
              return(
                <tr key={items.id}>
                    <th>{items.id}</th>
                    <th>{items.name}</th>
                    <th>{items.email}</th>
                    <th>{items.contact}</th>
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
