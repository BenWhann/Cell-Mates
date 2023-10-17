import '../styles/Matchedlist.css'
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Image from 'react-bootstrap/Image';

export default function MatchedListPage() {
    const { userId } = useParams();
    console.log("userId ", userId)
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId },
    });

    const userInfo = data?.user || {};
    console.log(data, " data")

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userInfo.length) {
        return <h3>No Matches Yet</h3>;
    }

    return (
      <div>
        <div>
          <h2>Matches: </h2>
            {userInfo.matches.map((match) =>
                <div key={match._id} className="">
                  <div>
                    <Image />
                  </div>
                  <div>
                    <h4>{match.username}</h4><br/>
                    <h4>{match.email}</h4>
                  </div>
                </div>)}
        </div>
      </div>
    )

}

// {userInfo.matches.map((match) =>
//     <div key={match._id} className="">
//         <h4>{match.name}</h4><br />
//     </div>)}