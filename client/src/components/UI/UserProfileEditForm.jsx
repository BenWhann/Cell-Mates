import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import CivilianPreferncesEdit from './CivilianPreferncesEdit';
import PrisonerInfoEdit from './PrisonerInfoEdit';

export default function userProfilePage(props) {

    const isInmate = props.user.isInmate;
    const userInfo = props.user;

    return (
        <Form className='container d-flex flex-column align-items-center'>
            <div>
                <h2 className='headers'>Basic Information</h2>
                <Form.Group className='mb-3' controlId='userName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder={props.user.username} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userSex'>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control type='text' placeholder={props.user.sex} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userLocation'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' placeholder={props.user.location} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userDescription'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder={props.user.description} />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='container d-flex flex-column align-items-center' controlId='userProfilePicture'>
                    <Form.Label>Profile Picture</Form.Label>
                    <Image className="" src="https://th.bing.com/th/id/OIP.FXRYRRu3s46GotImcD8EgQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7" rounded />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>
            <div>
                { isInmate ? <PrisonerInfoEdit user={userInfo} /> : <CivilianPreferncesEdit user={userInfo} /> }
            </div>
        </Form>
    )

}