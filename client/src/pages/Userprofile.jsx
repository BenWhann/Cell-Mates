import '../styles/Userprofile.css'
import { useState } from 'react';
import UserProfileStatic from '../components/UI/UserProfileStatic';
import UserProfileEditForm from '../components/UI/UserProfileEditForm';
import Button from 'react-bootstrap/Button';

export default function userProfilePage() {

    const [isStatic, setEditMode] = useState(true);

    return (
        <>
            <div className='profileBody container d-flex flex-column align-items-center'>
                <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                    <h1 className='headers'>User Profile</h1>
                    {isStatic && <Button className='btnColor' id='editBtn' type='submit' onClick={() => setEditMode(!isStatic)}>Edit</Button>}
                </div>
                <div className='container d-flex flex-column align-items-center'>
                    { isStatic ? <UserProfileStatic/> : <UserProfileEditForm/> }
                    {!isStatic && <Button className='btnColor' id='submitBtn' variant='primary' type='submit' onClick={() => setEditMode(!isStatic)}>Save</Button>}
                </div>
            </div>
        </>
    )

}