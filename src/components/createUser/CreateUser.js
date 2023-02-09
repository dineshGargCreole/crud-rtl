import React from "react";
import UserForm from "../forms/UserForm";
import Alert from "react-bootstrap/Alert";
// import axios from "axios";
import "./CreateUser.css";

function CreateUser() {
  const [users, setUsers] = React.useState([]);
  const [status, setStatus] = React.useState(true);

  const createUser = (user) => {
    user.id = Math.random();
    setStatus(true);
    // axios.post("http://localhost:3000/users", user).then((res) => {
    //   res.status === 201 && setStatus(true);
    // });
  };

  return (
    <div>
      {status && (
        <Alert
          key={"primary"}
          variant={"primary"}
          className="text-container text"
        >
          User Created successfully !!
        </Alert>
      )}
      <h1 className="text">Create a New User</h1>
      <UserForm onSubmit={createUser} />
    </div>
  );
}

export default CreateUser;
