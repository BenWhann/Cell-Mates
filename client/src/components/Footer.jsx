import Auth from '../utils/auth';
import Button from 'react-bootstrap/Button';
import '../styles/Meetmates.css';

export default function footer() {

    return(
      <div className='footCont mt-5'>
        {Auth.loggedIn() ? (
          <div className="conatiner">
            <div className="d-flex justify-content-center mt-5">
              <Button className='logoutBtn' size='lg' onClick={() => Auth.logout()}> Logout</Button>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <h6>Copyright 2023 by Team C</h6>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-5">
            <h6>Copyright 2023 by Team C</h6>
          </div>
        )}
      </div>
    )

}