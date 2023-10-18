export default function prisonerInfo(props) {

    // console.log(props.user.preference.sex)
    const isInmate = props.user.isInmate;


    return (
        <>
        {isInmate ? 

        <>
            <h2 className='headers'>Civilian Preferences</h2>
            <div>Preferred Sex: {props.user.preference.sex}</div>
            <div>Wanted: {props.user.preference.wanted}</div>
        </>

        :
        
        <div>N/A</div>

        }

        </>
    )
}