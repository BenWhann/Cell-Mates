import { Link } from 'react-router-dom';
import Nav from './UI/Navbar';
import Auth from '../utils/auth';
import '../styles/Home.css';

export default function header() {

  return (
    <div className='conatiner'>
      <div className='d-flex justify-content-center'>
        <h1>LOGO IMAGE</h1>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <Nav
            links={[
              <Link key={1} className="" to="/"> TEXT </Link>
            ]}
          />
        ) : (
          <div>
            <form action="/action_page.php">
              <div className='mx-5'>
                <label for="userName" className='form-label'></label>
                <input type="text" className="nameInput form-control" id='userName' placeholder='Username'></input>
              </div>
              <div className='mx-5'>
                <label for="userPassword" className='form-label'></label>
                <input type="password" className="nameInput form-control" id='userPassword' placeholder='Password'></input>
              </div>
              <div className='loginBtn mt-3'>
              <button type="button" className="btn btn-primary btn-lg">Login</button>
              </div>
            </form>
          </div> 
        )}
      </div>
    </div>
  )

}