import Auth from '../utils/auth';

export default function footer() {

    return(
      <div className='mt-5'>
        {Auth.loggedIn() ? (
          <div className="conatiner">
            <div className="d-flex justify-content-center">
              <a onClick={() => Auth.logout()}> Logout</a>
            </div>
            <div className="d-flex justify-content-center">
              <h6>Copyright 2023 by Team C</h6>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <h6>Copyright 2023 by Team C</h6>
          </div>
        )}
      </div>
    )

}