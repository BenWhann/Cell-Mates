import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


export default function signUppage(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [open, setOpen] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        age: formState.age,
        sex: formState.sex,
        location: formState.location,
        description: formState.description,
        isInmate: formState.age,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
      <div>
        <div>
          <h2>Signup</h2>
        </div>
        <div>
        <Form onSubmit={handleFormSubmit} className='SignupForm mx-5'>
          <Form.Group className="mb-3">
            <Form.Label for="userName">Username</Form.Label>
            <Form.Control type="text" id="userName" onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="email">Email</Form.Label>
            <Form.Control type="text" id="email" onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="password">Password</Form.Label>
            <Form.Control type="password" id="password" onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <p>Sex:</p>
            {['radio'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                label="Male"
                name="group1"
                id="maleRadio"
              />
              <Form.Check
                type={type}
                label="Female"
                name="group1"
                id ="femaleRadio"
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group className="mb-3">       
            <Form.Label for="location">Location</Form.Label>
            <Form.Control type="text" id="location" onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="inmate">Are you an Inmate</Form.Label>
            <Form.Check
              onClick={() => setOpen(!open)}
              aria-controls="inmateInfo"
              aria-expanded={open}
              type="switch"
              id="inmate"
              label="Yes"
              onChange={handleChange}
            />
          </Form.Group>
          <Collapse in={open}>
            <div id="inmateInfo">
              <Form.Group className="mb-3">
                <Form.Label for="releaseDate">Release Date</Form.Label>
                <Form.Control type="text" id="releaseDate" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="crime">Crime</Form.Label>
                <Form.Control type="text" id="crime" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label for="pastCon">Past Crime</Form.Label>
                <Form.Control type="text" id="pastCon" onChange={handleChange}></Form.Control>
              </Form.Group>
            </div>
          </Collapse>
          <Form.Group className="mb-3">
            <Form.Label for="description">Description</Form.Label>
            <Form.Control as='textarea' rows={5} id="description" onChange={handleChange}></Form.Control>
          </Form.Group>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </Form>
        </div>
      </div>
    )

}