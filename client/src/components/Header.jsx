import { Link } from 'react-router-dom';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Navi from './UI/Navbar';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { LOGIN } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import MainLogo from '../../public/images/MainLogo.png';
import '../styles/Home.css';

export default function header() {

  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='conatiner'>
      <div className='d-flex justify-content-center'>
        <Image src={MainLogo} />
        <div className='cellCont'>
          <h1 className='cellTitle'>Cell</h1>
        </div>
        <div className='mateCont'>
          <h1 className='mateTitle'>Mates</h1>
        </div>
      </div>
      <div className='mt-3'>
        {Auth.loggedIn() ? (
          <Navi
            links={[
              <Link key={1} className="nav-link" to="/meetmates"> Match Me </Link>,
              <Link key={2} className="nav-link" to="/userprofile"> Profile </Link>,
              <Link key={3} className="nav-link" to={`/matchedlist/${Auth.getProfile().data._id}`}> Mates </Link>,
              <Link key={4} className="nav-link" to="/commissary"> Send a Package </Link>
            ]}
          />
        ) : (
          <div>
            <div className='lbCont'>
              <Button className='loginBtn' variant="primary" size='lg' onClick={handleShow}>
                Login
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Please Login</Modal.Title>
              </Modal.Header>
              <Form onSubmit={handleFormSubmit}>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange} type="email" name="email" placeholder="name@example.com" autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" placeholder="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" autoFocus />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <button type="submit" className="btn btn-primary">Login</button>
                  <Button variant="secondary" onClick={handleClose}>
                    Exit
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        )}
      </div>
    </div>
  )

}