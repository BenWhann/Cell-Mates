import '../styles/Userprofile.css'
import { useState } from 'react';
import UserProfileStatic from '../components/UI/UserProfileStatic';
import UserProfileEditForm from '../components/UI/UserProfileEditForm';
import Button from 'react-bootstrap/Button';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

export default function userProfilePage() {

    const [isStatic, setEditMode] = useState(true);
    const { userId } = useParams();
    const { data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId },
    });
    const userInfo = data?.user || {};
    console.log("useIno ", userInfo)
   // let gent =

    return (
        <>
            <div className='profileBody container d-flex flex-column align-items-center'>
                <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                    <h1 className='headers'>User Profile</h1>
                    {isStatic && <Button className='btnColor' id='editBtn' type='submit' onClick={() => setEditMode(!isStatic)}>Edit</Button>}
                </div>
                <div className='container d-flex flex-column align-items-center'>
                    { isStatic ? <UserProfileStatic user={userInfo}/> : <UserProfileEditForm user={userInfo}/> }
                    {!isStatic && <Button className='btnColor' id='submitBtn' variant='primary' type='submit' onClick={() => setEditMode(!isStatic)}>Save</Button>}
                </div>
            </div>
        </>
    )

}