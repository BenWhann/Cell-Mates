import '../styles/Userprofile.css'
import { useState } from 'react';
import UserProfileStatic from '../components/UI/UserProfileStatic';
import UserProfileEditForm from '../components/UI/UserProfileEditForm';

export default function userProfilePage() {

    const [isStatic, setEditMode] = useState(true);

    return (
        <>
            <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                <h1>User Profile</h1>
                <button id='editBtn' onClick={() => setEditMode(!isStatic)}>Edit</button>
            </div>
            { isStatic ? <UserProfileStatic/> : <UserProfileEditForm/> }
            {/* { isStatic && <UserProfileStatic/> }
            { !isStatic && <UserProfileEditForm/> } */}
        </>
    )

}