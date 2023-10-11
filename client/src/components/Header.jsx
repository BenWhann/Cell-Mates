import { Link } from 'react-router-dom';
import Nav from './UI/Navbar';

export default function header() {

  return (
    <>
     <Nav
      links={[
        <Link key={1} className="" to="/"> TEXT </Link>
      ]}
    />
    </>
  )

}