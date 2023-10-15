import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


export default function signUppage(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [open, setOpen] = useState(false);
//  const [validated, setValidated] = useState(false);

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
        isInmate: formState.isInmate,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);

//    const form = event.currentTarget;
//    if (form.checkValidity() === false) {
//      event.preventDefault();
//      event.stopPropagation();
//    }

//    setValidated(true);

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
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <p>Sex:</p>
            {['radio'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                label="Male"
                name="group1"
                onChange={handleChange}
              />
              <Form.Check
                type={type}
                label="Female"
                name="group1"
                onChange={handleChange}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group className="mb-3">       
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" required onChange={handleChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Are you an Inmate</Form.Label>
            <Form.Check
              onClick={() => setOpen(!open)}
              aria-controls="inmateInfo"
              aria-expanded={open}
              type="switch"
              label="Yes"
              onChange={handleChange}
            />
          </Form.Group>
          <Collapse in={open}>
            <div id="inmateInfo">
              <Form.Group className="mb-3">
                <Form.Label>Release Date</Form.Label>
                <Form.Control type="text" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Crime</Form.Label>
                <Form.Control type="text" onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Past Crime</Form.Label>
                <Form.Control type="text" onChange={handleChange}></Form.Control>
              </Form.Group>
            </div>
          </Collapse>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows={5} required onChange={handleChange}></Form.Control>
          </Form.Group>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </Form>
        </div>
      </div>
    )

}