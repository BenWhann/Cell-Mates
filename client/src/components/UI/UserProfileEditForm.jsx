import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

export default function userProfilePage() {

    return (
        <Form className='container d-flex flex-column align-items-center'>
            <div>
                <h2 className='headers'>Basic Information</h2>
                <Form.Group className='mb-3' controlId='userName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userSex'>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='userLocation'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='container d-flex flex-column align-items-center' controlId='userProfilePicture'>
                    <Form.Label>Profile Picture</Form.Label>
                    <Image className="" src="https://th.bing.com/th/id/OIP.FXRYRRu3s46GotImcD8EgQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7" rounded />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>
            <div>
                <h2 className='headers'>Prisoner Details</h2>

                <Form.Group className='mb-3' controlId='prisonerAddress'>
                    <Form.Label>Prison Address</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='wishList'>
                    <Form.Label>Commissary Wish List</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>

            <div className='container d-flex flex-column align-items-center'>
                <h2 className='headers'>Communication Settings</h2>

                <Form.Group className='container d-flex flex-column align-items-center' controlId='emailComm'>
                    <Form.Label>Allow Email Communication?</Form.Label>
                    <Form.Check type='checkbox' label='Check for yes.' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>

            <div>
                <h2 className='headers'>Civilian Preferences</h2>

                <Form.Group className='mb-3' controlId='sentenceLength'>
                    <Form.Label>Sentence Length</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='badCrimes'>
                    <Form.Label>Deal Breaker Crimes</Form.Label>
                    <Form.Control type='text' placeholder='' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>
        </Form>
    )

}