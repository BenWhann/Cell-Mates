import '../styles/Matchedlist.css'
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

export default function MatchedListPage() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId },
    });

    const userInfo = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userInfo.matches?.length) {
        return <h3>No Matches Yet</h3>;
    }

    return (
      <div>
        <h2>Matches: </h2>
          {userInfo.matches.map((match) =>
            <div key={match._id} className="matchedUser">
              <Image src={match.profilePic} onClick={handleShow}/>
              <div>
                <h4>{match.username}</h4><br/>
                <h4>{match.email}</h4>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{match.username}'s Profile Info' </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Age: {match.age}</p><br/>
                  <p>Sex: {match.sex}</p><br/>
                  <p>Location: {match.location}</p><br/>
                  <p>Description: {match.description}</p><br/>
                  {match.isInmate && ( 
                  <>
                    <p>Release Date: {match?.inmate?.releaseDate}</p><br/>
                    <p>Crime: {match?.inmate?.crime}</p><br/>
                    <p>Past Convictions: {match?.inmate?.pastConvictions}</p>
                  </>
                  )} 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>)}
      </div>
    )

}

// {userInfo.matches.map((match) =>
//     <div key={match._id} className="">
//         <h4>{match.name}</h4><br />
//     </div>)}