import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Home.css';

export default function Navi({ links }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div className='d-flex justify-content-center'>
        <button className='menuBtn' onClick={handleShow}>
          <div className='menuIcon'></div>
          <div className='menuIcon'></div>
          <div className='menuIcon'></div>
        </button>
        <Navbar.Offcanvas className='canvasNav' show={show} onClick={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    )

}