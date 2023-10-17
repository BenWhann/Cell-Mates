import '../styles/Meetmates.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Thumbsup from '../../public/images/thumbsup.png'
import Thumbsdown from '../../public/images/thumbsdown.png'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LIKES, ADD_MATCH } from '../utils/mutations';
import { QUERY_USERS } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function meetMatesPage() {
  const [addLikes, { likes }] = useMutation(ADD_LIKES);
  const [addMatch, { matches }] = useMutation(ADD_MATCH);
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || {};
  
  const userLength = data?.users.length;
  let [index, setIndex] = useState(0);
  console.log("dusersata", users)

 
  const handleOnClickLike = async (event) => {
    event.preventDefault();
    const { likes } = await addLikes({
      variables: { userId: users[index]?._id},
    });

    const { matches } = await addMatch({
      variables: { userId: undefined},
    });

    if(index < userLength){
      index = index + 1;
      setIndex(index);
    }
  };

  const handleOnClickDisLike = async (event) => {
    event.preventDefault();
    if(index < userLength){
      index = index + 1;
      setIndex(index);
    }
  };

    return (
      <div>
        <div className='matesCont mt-5'>
          <Link>
            <Image className='thumbIconD' src={Thumbsdown} rounded onClick={handleOnClickDisLike}/>
          </Link>
          <Link>
          <Image className='matesInfo' src="" rounded></Image>
          <h4>{users[index]?.username}</h4>
          <p>{users[index]?.description}</p>
          </Link>
          <Link>
            <Image className='thumbIconU' src={Thumbsup} rounded onClick={handleOnClickLike} />
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