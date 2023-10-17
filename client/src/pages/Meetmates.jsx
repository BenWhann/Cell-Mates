import '../styles/Meetmates.css';
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
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LIKES, ADD_MATCH } from '../utils/mutations';
import { QUERY_USERS } from '../utils/queries';
import { useParams } from 'react-router-dom';

export default function meetMatesPage() {
  const [addLikes, { likes }] = useMutation(ADD_LIKES);
  const [addMatch, { matches }] = useMutation(ADD_MATCH);
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_USERS, {
       variables: { userId: userId },
   });

  const userInfo = data?.user || {};

  const handleOnClick = async (event) => {
    event.preventDefault();

    const { likes } = await addLikes({
      variables: { userId: user},
    });

    const { matches } = await addMatch();
  };

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
            <Image className='thumbIconU' src={Thumbsup} roundedonClick={handleOnClick} />
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