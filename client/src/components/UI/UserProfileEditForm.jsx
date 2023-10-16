import Form from 'react-bootstrap/Form';

export default function userProfilePage() {

    return (
        <Form>
            <h2>Basic Information</h2>
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

            <Form.Group className='mb-3' controlId='userProfilePicture'>
                <Form.Label>Profile Picture</Form.Label>
                {/* {<Image className="" src={} />} */}
                <Form.Text className=''></Form.Text>
            </Form.Group>
            
            <div>
                <h2>Prisoner Details</h2>

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

            <div>
                <h2>Communication Settings</h2>

                <Form.Group className='mb-3' controlId='emailComm'>
                    <Form.Label>Allow Email Communication?</Form.Label>
                    <Form.Check type='checkbox' label='Check for yes.' />
                    <Form.Text className=''></Form.Text>
                </Form.Group>
            </div>

            <div>
                <h2>Civilian Preferences</h2>

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