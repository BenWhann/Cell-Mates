import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import CivilianPreferncesEdit from './CivilianPreferncesEdit';
import PrisonerInfoEdit from './PrisonerInfoEdit';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { useState } from 'react';
import Auth from "../../utils/auth";

export default function userProfilePage(props) {

    const isInmate = props.user.isInmate;
    const userInfo = props.user;
    const [formState, setFormState] = useState({});
    const [updateUser] = useMutation(UPDATE_USER);

    //set form state when any change occurs
    const handleChange = (event) => {
        let { name, value } = event.target;
        if(name === 'age') value = parseInt(value);
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const { data } = await updateUser({
            variables: {
                input: {
                    ...formState
                }
            },
        });
        //after save, go back to static page
        window.location.assign('/userprofile/'+ (Auth.getProfile().data._id).toString());
    };

    return (
        <Form onSubmit={handleFormSubmit} className='userFormEdit container d-flex flex-column align-items-center'>
            <div>
                <h2 className='headers'>Basic Information</h2>
                <Form.Group className='mb-3' controlId='userName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name="username" onChange={handleChange} placeholder={props.user.username} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userSex'>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control type='text' name="sex" onChange={handleChange} placeholder={props.user.sex} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userLocation'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' name='location' onChange={handleChange} placeholder={props.user.location} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userDescription'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' name="description" onChange={handleChange} placeholder={props.user.description} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userAge'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='number' name="age"  step={1} onChange={handleChange} placeholder={props.user.age} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='container d-flex flex-column align-items-center' controlId='userProfilePicture'>
                    <Form.Label>Profile Picture</Form.Label>
                    <Image className="editFormPic" src={props.user.profilePic} rounded />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>
            <div>
                {isInmate ? <PrisonerInfoEdit user={userInfo} /> : <CivilianPreferncesEdit user={userInfo} />}
            </div>
            <button type="submit" className="formBtn">Save</button>
        </Form>
    )

}