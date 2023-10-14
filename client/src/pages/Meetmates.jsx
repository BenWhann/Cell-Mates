import '../styles/Meetmates.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Thumbsup from '../../public/images/thumbsup.png'
import Thumbsdown from '../../public/images/thumbsdown.png'

export default function meetMatesPage() {

    return (
      <div>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Thumbsdown} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Thumbsup} rounded />
        </Col>
      </Row>
    </Container>
    </div>
    )

}