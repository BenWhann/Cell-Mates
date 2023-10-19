import '../styles/Matchedlist.css'
// import { QUERY_SINGLE_USER } from '../utils/queries';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { useState } from 'react';
import Mymatches from '../components/UI/Mymatches'

// import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Modal from 'react-bootstrap/Modal';

export default function MatchedListPage() {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  //   const { userId } = useParams();
  //   const { loading, data } = useQuery(QUERY_SINGLE_USER, {
  //       variables: { userId: userId },
  //   });

  //   const userInfo = data?.user || {};

  //   if (loading) {
  //       return <div>Loading...</div>;
  //   }

  //   if (!userInfo.matches?.length) {
  //       return <h3>No Matches Yet</h3>;
  //   }

    return (
      <div className='mt-5'>
        <div className='matesTitle'>
          <h2>Matches: </h2>
        </div>
        <Mymatches />
      </div>
    )

}