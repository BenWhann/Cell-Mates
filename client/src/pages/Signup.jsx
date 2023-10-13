import Form from 'react-bootstrap/Form';

export default function signUppage() {

    return (
      <div>
        <div>
          <h2>Signup</h2>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label for="userName">Username</Form.Label>
            <Form.Control type="text" id="userName"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="email">Email</Form.Label>
            <Form.Control type="text" id="email"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="password">Password</Form.Label>
            <Form.Control type="password" id="password"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="password">Confirm password</Form.Label>
            <Form.Control type="password" id="password"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <a>Sex:</a>
            <Form.Control type="radio" id="male" value="male"></Form.Control>
            <Form.Label for="male">Male</Form.Label>
            <Form.Control type="radio" id="female" value="female"></Form.Control>
            <Form.Label for="female">Female</Form.Label>
          </Form.Group>
          <Form.Group> className="mb-3"       
            <Form.Label for="location">Location</Form.Label>
            <Form.Control type="text" id="location"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="inmate">Are you an Inmate</Form.Label>
            <select id="inmate">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="releaseDate">Release Date</Form.Label>
            <Form.Control type="text" id="releaseDate"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="crime">Crime</Form.Label>
            <Form.Control type="text" id="crime"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="pastCon">Past Crime</Form.Label>
            <Form.Control type="text" id="pastCon"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="description">Description</Form.Label>
            <Form.Control as='textarea' rows={5} id="description"></Form.Control>
          </Form.Group>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </Form>
      </div>
    )

}