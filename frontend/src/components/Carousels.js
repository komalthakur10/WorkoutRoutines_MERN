import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/drawing1.png';
import img2 from '../images/drawing2.png';
import img3 from '../images/drawing3.png';
import img4 from '../images/drawing4.png';
import img5 from '../images/drawing5.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervals() {
  return (
    <div className='carousels'>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="Did you workout Today?"
          />
          <Carousel.Caption>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Everyday is a Fresh Start"
          />
          <Carousel.Caption>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Don't wish for it work for it."
          />
           <Carousel.Caption>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img4}
            alt="A little progress each day adds up to Big Results."
          />
           <Carousel.Caption>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img5}
            alt="Get Fit ot Get Sick."
          />
           <Carousel.Caption>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervals;