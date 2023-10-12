export default function signUppage() {

    return (
      <div>
        <form>
          <label for="userName">Username</label>
          <input type="text" id="userName"></input><br></br>
          <label for="email">Email</label>
          <input type="text" id="email"></input><br></br>
          <label for="password">Password</label>
          <input type="password" id="password"></input><br></br>
          <label for="password">Confirm password</label>
          <input type="password" id="password"></input><br></br>
          <a>Sex:</a>
          <input type="radio" id="male" value="male"></input>
          <label for="male">Male</label>
          <input type="radio" id="female" value="female"></input>
          <label for="female">Female</label><br></br>       
          <label for="location">Location</label>
          <input type="text" id="location"></input><br></br>
          <label for="inmate">Are you an Inmate</label>
          <select id="inmate">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br></br>
          <label for="releaseDate">Release Date</label>
          <input type="text" id="releaseDate"></input><br></br>
          <label for="crime">Crime</label>
          <input type="text" id="crime"></input><br></br>
          <label for="pastCon">Past Crime</label>
          <input type="text" id="pastCon"></input><br></br>
          <label for="description">Description</label><br></br>
          <textarea id="description"></textarea>
        </form>
      </div>
    )

}