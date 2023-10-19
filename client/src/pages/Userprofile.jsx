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
    const userInfo = data?.user || {};

    //mutation to delete a user and then logout
    const deleteUserAndLogout = async (event) => {
        await deleteUser({
            variables: { id: userId }
        });
        Auth.logout();
    };

    //if user clicks edit button use edit form otherwise using static form
    //use state to update static variable
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
                </div>
            </div>
        </>
    )

}