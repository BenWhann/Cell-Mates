import '../styles/Userprofile.css'
import { useState } from 'react';
import UserProfileStatic from '../components/UI/UserProfileStatic';
import UserProfileEditForm from '../components/UI/UserProfileEditForm';
import Button from 'react-bootstrap/Button';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../utils/mutations';
import Auth from "../utils/auth";

export default function userProfilePage() {

    const [isStatic, setEditMode] = useState(true);
    const [deleteUser] = useMutation(DELETE_USER);
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: userId },
    });
    console.log('userId', userId)
    console.log('Data', data)
    const userInfo = data?.user || {};

    const deleteUserAndLogout = async (event) => {
        console.log("userId delete ", userId)
        await deleteUser({
            variables: { id: userId }
        });
        console.log('made it to logout!')
        Auth.logout();
    };

    return (
        <>
            <div className='profileBody container d-flex flex-column align-items-center'>
                <div id='profileHeader' className='m-3 d-flex flex-column align-items-center'>
                    <h1 className='headers'>User Profile</h1>
                    <button className='btnColor' id='deleteBtn' type='submit' onClick={() => deleteUserAndLogout()}>Delete Profile</button>
                    {isStatic && <button className='btnColor' id='editBtn' type='submit' onClick={() => setEditMode(!isStatic)}>Edit</button>}
                </div>
                <div className='container d-flex flex-column align-items-center'>
                    {isStatic ? <UserProfileStatic user={userInfo} /> : <UserProfileEditForm user={userInfo} />}
                    {!isStatic && <Button className='btnColor' id='submitBtn' variant='primary' type='submit' onClick={() => setEditMode(!isStatic)}>Save</Button>}
                </div>
            </div>
        </>
    )

}