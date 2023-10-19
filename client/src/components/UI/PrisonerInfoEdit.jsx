import Form from 'react-bootstrap/Form';

export default function PrisonerInfoEdit(props) {

    const isInmate = props.user.isInmate;

    return (
        <div className='pEditInfo'>
        {isInmate ?
        <>
        <h2 className='headers'>Prisoner Details</h2>

        <Form.Group className='mb-3' controlId='prisonerAddress'>
            <Form.Label>Prison Address</Form.Label>
            <Form.Control type='text' placeholder={props.user.location} />
            <Form.Text className=''></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='wishList'>
            <Form.Label>Commissary Wish List</Form.Label>
            <Form.Control type='text' placeholder='' />
            <Form.Text className=''></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='releaseDate'>
            <Form.Label>Release Date</Form.Label>
            <Form.Control type='text' placeholder={props.user.inmate.releaseDate} />
            <Form.Text className=''></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='crime'>
            <Form.Label>Locked up for</Form.Label>
            <Form.Control type='text' placeholder={props.user.inmate.crime} />
            <Form.Text className=''></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='pastConvictions'>
            <Form.Label>Past Convictions</Form.Label>
            <Form.Control type='text' placeholder={props.user.inmate.pastConvictions} />
            <Form.Text className=''></Form.Text>
        </Form.Group>
        </>
        :
        <div>N/A</div>
        }
        </div>
    )
}