export default function prisonerInfo(props) {

    // console.log(props.user)
    const isInmate = props.user.isInmate;

    return (
        <>
            {isInmate ? 
        
            <>
                <h2 className='headers'>Prisoner Details</h2>
                <div>Prison Address: {props.user.location}</div>
                <div>Commissary Item Wish List: </div>
                <div>Release Date: {props.user.inmate.releaseDate}</div>
                <div>Locked up for: {props.user.inmate.crime}</div>
                <div>Past Convictions: {props.user.inmate.pastConvictions}</div>
            </>
        
            :
                
            <div>N/A</div>
        
            }
        
        </>
    )
}