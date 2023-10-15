import '../styles/Meetmates.css';
import Mate from '../components/UI/Mate'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';
import { Link } from 'react-router-dom';
import Thumbsup from '../../public/images/thumbsup.png'
import Thumbsdown from '../../public/images/thumbsdown.png'

export default function meetMatesPage() {

    return (
      <div>
        <div className='matesCont mt-5'>
          <Link>
            <Image className='thumbIconD' src={Thumbsdown} rounded/>
          </Link>
          <Link>
          <Image className='matesInfo' src="" rounded></Image>
          </Link>
          <Link>
            <Image className='thumbIconU' src={Thumbsup} rounded/>
          </Link>
        </div>
      </div>
    )

}

{/* <Container className='mt-3'>
<Row>
  <Col>
    <Link to='/meetmates'>
      <Image className='thumbIconD' src={Thumbsdown} rounded/>
    </Link>
  </Col>
  <Col>
    <Image className='matesInfo' src="" rounded></Image>
  </Col>
  <Col>
  <Link>
    <Image className='thumbIconU' src={Thumbsup} rounded/>
    </Link>
  </Col>
</Row>
</Container> */}