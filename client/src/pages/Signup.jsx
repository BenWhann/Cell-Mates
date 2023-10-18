import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from "../utils/auth";



export default function signUppage(props) {
  const [formState, setFormState] = useState({ isInmate: true, inmate: {} });
  const [addUser] = useMutation(ADD_USER);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    let { name, value } = event.target;

    if (name === "sex") {
      value = event.target.id[4].toUpperCase();
    }
    if (name === "isInmate") {
      value = event.target.ariaExpanded === "true" ? true : false;
    }
    if (name === "crime") {
      setFormState({
        ...formState,
        inmate: { ...formState.inmate, crime: value },
      });
      return;
    }
    if (name === "pastConvictions") {
      setFormState({
        ...formState,
        inmate: { ...formState.inmate, pastConvictions: value },
      });
      return;
    }
    if (name === "releaseDate") {
      setFormState({
        ...formState,
        inmate: { ...formState.inmate, releaseDate: value },
      });
      return;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { data } = await addUser({
      variables: {
        input: {
          ...formState,
          isInmate: formState.isInmate ?? false
        }

      },
    });
    Auth.login(data.addUser.token);

    //    const form = event.currentTarget;
    //    if (form.checkValidity() === false) {
    //      event.preventDefault();
    //      event.stopPropagation();
    //    }

    //    setValidated(true);

  };

  return (
    <div>
      <div className='m-3'>
        <h2>Signup</h2>
      </div>
      <div>
        <Form onSubmit={handleFormSubmit} className='SignupForm mx-5'>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="text" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <p>Sex:</p>
            {['radio'].map((type) => (
              <div key={`default-${type}`} className="mb-3 ">
                <Form.Check
                  type={type}
                  label="Male"
                  id="sex-M"
                  name="sex"
                  onChange={handleChange}
                />
                <Form.Check
                  type={type}
                  label="Female"
                  id="sex-F"
                  name="sex"
                  onChange={handleChange}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group className="mb-3" name="location">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" type="text" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" name="isInmate">
            <Form.Label>Are you an Inmate</Form.Label>
            <Form.Check
              onClick={() => setOpen(!open)}
              aria-controls="inmateInfo"
              aria-expanded={open}
              name="isInmate"
              type="switch"
              label="Yes"
              onChange={handleChange}
            />
          </Form.Group>
          <Collapse in={open}>
            <div id="inmateInfo">
              <Form.Group className="mb-3">
                <Form.Label>Release Date</Form.Label>
                <Form.Control name="releaseDate" type="date" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Crime</Form.Label>
                <Form.Control name="crime" type="text" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Past Convictions</Form.Label>
                <Form.Control name="pastConvictions" type="text" onChange={handleChange}></Form.Control>
              </Form.Group>
            </div>
          </Collapse>
          <Form.Group className="mb-3" name="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" as='textarea' rows={5} required onChange={handleChange}></Form.Control>
          </Form.Group>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </Form>
      </div>
    </div>
  )

}