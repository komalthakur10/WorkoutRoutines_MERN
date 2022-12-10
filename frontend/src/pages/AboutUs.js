import IndividualIntervals from '../components/Carousels'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img1 from '../images/Icon1.png'
import img2 from '../images/Icon2.png'
import img3 from '../images/Icon3.png'
import img4 from '../images/Icon4.png'

const AboutUs = () => {
    return (
        <div>
            <IndividualIntervals />
            <span className='abt-text'> 
                <h2 className='abt-main'>
                    <b>We want to help people maintain their workouts records easily.</b>
                </h2>
            </span>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8} className='container abt-div'>
                        <span className='abt-text'> 
                        Fitness Diary is a <b>personal workout diary</b> where you can record your workouts and easily keep track of them.
                        </span>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className='abt-icon' src={img1} fulid="true" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                            <Image className='abt-icon' src={img2} fulid="true" />
                        </Col>
                        <Col xs={12} md={8} className='container abt-div'>
                            <span className='abt-text'> 
                                <b>“Do something today that your future self will thank you for.”</b>
                            </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} className='container abt-div'>
                        <span className='abt-text'> 
                        To make people aware about their workout or fitness goals after the pandemic everyone realized that <b>health is wealth. </b>
                        </span>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className='abt-icon' src={img3} fulid="true" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                            <Image className='abt-icon' src={img4} fulid="true" />
                    </Col>
                    <Col xs={12} md={8} className='container abt-div'>
                        <span className='abt-text'> 
                        Can be used by peoples in rural as well as urban areas where there are no designated qualified trainers to maintain their fitness workout goals <b>at own pace at Home.</b>
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutUs;