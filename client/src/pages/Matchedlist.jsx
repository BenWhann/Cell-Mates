import '../styles/Matchedlist.css'
import Mymatches from '../components/UI/Mymatches'

export default function MatchedListPage() {

    return (
      <div className='mt-5'>
        <div className='matesTitle'>
          <h2>Matches: </h2>
        </div>
        <Mymatches />
      </div>
    )

}