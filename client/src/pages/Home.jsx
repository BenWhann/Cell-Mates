import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import FirstImage from '../../public/images/firstimage.jpg';
import SecondImage from '../../public/images/secondimage.jpg';
import ThirdImage from '../../public/images/thirdimage.jpg';
import '../styles/Home.css'

export default function Homepage() {

  return (
    <div className='d-flex justify-content-center mt-5 mx-4'>
      <Carousel className='carouselCont' fade>
        <Carousel.Item>
          <Link to="/signup">
            <Image className="homeImages" src={FirstImage} rounded />
            <Carousel.Caption>
              <h3>Sign Up Now!!!</h3>
              <p>Random Caption</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/signup">
            <Image className="homeImages" src={SecondImage} rounded />
            <Carousel.Caption>
              <h3>Sign Up Now!!!</h3>
              <p>Random Caption</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/signup">
            <Image className="homeImages" src={ThirdImage} rounded />
            <Carousel.Caption>
              <h3>Sign Up Now!!!</h3>
              <p>Random Caption</p>
            </Carousel.Caption>
          </Link>
      </Carousel.Item>
    </Carousel>
    </div>
  )

}