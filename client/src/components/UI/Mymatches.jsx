import { QUERY_SINGLE_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

export default function myMatches() {

    // const [modalData, setModalData] = useState(null);

    // const [show, setShow] = useState(undefined);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
  
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

  return(
    <>

    <div className='d-flex justify-content-center'>

    {userInfo.matches.map((match) =>
    <>
      <div key={match._id} className="matchedUser">
        <img className='matchedPic' src={match.profilePic} />
        <div className='mmlInfo'>
          <h3>{match.username} {match.age}</h3>
          <p>Sex: {match.sex}<br/>
             Location: {match.location}<br/>
             email: {match.email}</p>
             {match.isInmate && ( 
        <>
          <p>Release Date: {match?.inmate?.releaseDate}<br/>
             Crime: {match?.inmate?.crime}<br/>
             Past Convictions: {match?.inmate?.pastConvictions}</p>
        </>
        )} 
             <p>{match.description}</p>
          {/* <Button variant="primary" onClick={handleShow}>Profile Info</Button> */}
        </div>
      </div>
      
      {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{match.username}'s Profile Info' </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Age: {match.age}</p><br/>
        <p>Sex: {match.sex}</p><br/>
        <p>Location: {match.location}</p><br/>
        <p>Email: {match.email}</p><br/>
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
    </Modal> */}
    </>
      )}
    </div>    
    </>
  )

}