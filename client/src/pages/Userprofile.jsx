import '../styles/Userprofile.css'
import { useState } from 'react';
import UserProfileStatic from '../components/UI/UserProfileStatic';
import UserProfileEditForm from '../components/UI/UserProfileEditForm';
import Button from 'react-bootstrap/Button';

export default function userProfilePage() {

    const [isStatic, setEditMode] = useState(true);

    return (
        <>
            <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                <h1>User Profile</h1>
                {isStatic && <Button id='editBtn' variant='primary' type='submit' onClick={() => setEditMode(!isStatic)}>Edit</Button>}
            </div>\
            <div>
                { isStatic ? <UserProfileStatic/> : <UserProfileEditForm/> }
                {!isStatic && <Button id='submitBtn' variant='primary' type='submit' onClick={() => setEditMode(!isStatic)}>Submit</Button>}
            </div>
        </>
    )

}