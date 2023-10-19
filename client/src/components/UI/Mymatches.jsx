import { QUERY_SINGLE_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

export default function myMatches() {
  
      const { userId } = useParams();
      const { loading, data } = useQuery(QUERY_SINGLE_USER, {
          variables: { id: userId },
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
      <div className='matchedCards'>
        {userInfo.matches.map((match) =>
          <div>
            <div key={match._id} className="matchedUser">
              <img className='matchedPic' src={match.profilePic} />
              <div className='mmlInfo'>
                <h2>{match.username} {match.age}</h2>
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
              </div>
            </div>
          </div>
        )}
      </div>    
    </>
  )

}