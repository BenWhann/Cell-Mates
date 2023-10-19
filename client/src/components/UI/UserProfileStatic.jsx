import PrisonerInfo from './PrisonerInfo';
import CivilianPreferences from './CivilianPrefernces';
import Image from 'react-bootstrap/Image';

export default function userProfilePage(props) {

    console.log('UserProps', props.user);
    const isInmate = props.user.isInmate;
    console.log(isInmate)
    const userInfo = props.user;

    return (
        <>
        <div id='userProfile' className='container d-flex flex-column align-items-center'>
            <div id='basicInfo' className='m-3 d-flex flex-column align-items-center'>
                <h2 className='headers'>Basic Information</h2>
                <div>Name: {props.user.username}</div>
                <div>Sex: {props.user.sex}</div>
                <div>Location: {props.user.location}</div>
                <div>Description: {props.user.description}</div>
                <div>Profile Picture</div>
                <Image className="" src="https://th.bing.com/th/id/OIP.FXRYRRu3s46GotImcD8EgQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7" rounded />
            </div>
            <div id='prisonerDetails' className='m-3 d-flex flex-column align-items-center'>
                { isInmate ? <PrisonerInfo user={userInfo}/> : <CivilianPreferences user={userInfo}/>}
            </div>
        </div>
        </>
    )

}