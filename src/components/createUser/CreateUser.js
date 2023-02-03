import React from "react";
import UserForm from "../forms/UserForm";
import "./CreateUser.css";

function CreateUser() {
  return (
    <div>
      <h1 className="text">Create a New User</h1>
      <UserForm />
    </div>
  );
}

export default CreateUser;
