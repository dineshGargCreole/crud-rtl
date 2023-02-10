import React from "react";
import Table from "react-bootstrap/Table";
import "./DisplayUsers.css";

function DisplayUsers({ users }) {
  return (
    <Table striped bordered hover className="table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button> | <button>x</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DisplayUsers;
