import '../styles/Userprofile.css'
import PrisonerInfo from '../components/UI/PrisonerInfo';
import CivilianPreferences from '../components/UI/CivilianPrefernces';
import { useState } from 'react';

export default function userProfilePage() {

    const [isPrisoner, setIsPrisoner] = useState(true);
    const [isCivilian, setIsCivilian] = useState(true);

    return (
        <>
        <div id='userProfile' className='container d-flex flex-column align-items-center'>
            <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                <h1>User Profile</h1>
                <button id='editBtn'>Edit</button>
            </div>
            <div id='basicInfo' className='m-3 d-flex flex-column align-items-center'>
                <h2>Basic Information</h2>
                <div>Name</div>
                <div>Sex</div>
                <div>Location</div>
                <div>Profile Picture</div>
            </div>
            <div id='prisonerDetails' className='m-3 d-flex flex-column align-items-center'>
                { isPrisoner && <PrisonerInfo/>}
                <button onClick={() => setIsPrisoner(!isPrisoner)}>Is Prisoner?</button>
            </div>
            <div id='communicationSettings' className='m-3 d-flex flex-column align-items-center'>
                <h2>Communication Settings</h2>
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