import Form from 'react-bootstrap/Form';

export default function CivilianPreferncesEdit(props) {

    const isInmate = props.user.isInmate;

    return (
        <>
        {isInmate ?
        <>
        <h2 className='headers'>Civilian Preferences</h2>

        <Form.Group className='mb-3' controlId='preferredSex'>
            <Form.Label>Preferred Sex</Form.Label>
            <Form.Control type='text' placeholder={props.user.preference.sex} />
            <Form.Text className=''></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='wanted'>
            <Form.Label>Wanted</Form.Label>
            <Form.Control type='text' placeholder={props.user.preference.wanted} />
            <Form.Text className=''></Form.Text>
        </Form.Group>
        </>
        :
        <div>N/A</div>
        }
        </>
    )
}