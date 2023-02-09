import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UserForm.css";

function UserForm(props) {
  const initialValues = {
    name: "",
    username: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={"form"}
          >
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                onChange={handleChange}
                name={"name"}
                id={"name"}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={handleChange}
                name={"username"}
                id={"username"}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                name={"email"}
                id={"email"}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserForm;
