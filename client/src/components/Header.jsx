import { Link } from 'react-router-dom';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Navi from '../components/UI/Navbar';
import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MainLogo from '../../public/images/MainLogo.png';
import '../styles/Home.css';

export default function header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='conatiner'>
      <div className='d-flex justify-content-center'>
        <Image src={MainLogo} text="Cell" />
          <div className='cellCont'>
            <h1 className='cellTitle'>Cell</h1>
          </div>
          <div className='mateCont'>
            <h1 className='mateTitle'>Mates</h1>
          </div>
      </div>
      <div className='mt-3'>
        {Auth.loggedIn() ? (
          <div>
              <Navi
                links={[
                  <Link key={1} className="nav-link" to="/meetmates"  onClick={() => (this.expand = '')}> Match Me </Link>,
                  <Link key={2} className="nav-link" to="/userprofile" onClick={() => (this.expand = '')}> Profile </Link>,
                  <Link key={3} className="nav-link" to="/matchedlist" onClick={() => (this.expand = '')}> Mates </Link>,
                  <Link key={4} className="nav-link" to="/commissary" onClick={() => (this.expand = '')}> Send Package </Link>  
                ]}
              />
          </div>
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
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" autoFocus/>
                </Form.Group>
                <Form.Group className="mb-3" placeholder="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" autoFocus/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => Auth.login()}>
                Login
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Exit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        )}
      </div>
    </div>
  )

}