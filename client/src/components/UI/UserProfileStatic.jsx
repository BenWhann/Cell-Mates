import PrisonerInfo from './PrisonerInfo';
import CivilianPreferences from './CivilianPrefernces';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

export default function userProfilePage(props) {

    console.log(props.user);
    const [isPrisoner, setIsPrisoner] = useState(true);
    const [isCivilian, setIsCivilian] = useState(true);
    //const [isEditing, setEditMode] = useState(false);

    return (
        <>
        <div id='userProfile' className='container d-flex flex-column align-items-center'>
            {/* <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                <h1>User Profile</h1>
                <button id='editBtn' onClick={() => setEditMode(!isEditing)}>Edit</button>
            </div> */}
            <div id='basicInfo' className='m-3 d-flex flex-column align-items-center'>
                <h2 className='headers'>Basic Information</h2>
                <div>Name</div>
                <div>Sex</div>
                <div>Location</div>
                <div>Profile Picture</div>
                <Image className="" src="https://th.bing.com/th/id/OIP.FXRYRRu3s46GotImcD8EgQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7" rounded />
            </div>
            <div id='prisonerDetails' className='m-3 d-flex flex-column align-items-center'>
                { isPrisoner && <PrisonerInfo/>}
                <button onClick={() => setIsPrisoner(!isPrisoner)}>Is Prisoner?</button>
            </div>
            <div id='communicationSettings' className='m-3 d-flex flex-column align-items-center'>
                <h2 className='headers'>Communication Settings</h2>
                <div>Allow Email Communication?</div>
            </div>
            <div id='civilianPreferences' className='m-3 d-flex flex-column align-items-center'>
                { isCivilian && <CivilianPreferences/>}
                <button onClick={() => setIsCivilian(!isCivilian)}>Is Civilian?</button>
            </div>
        </div>
        </>
    )

}