import { Container, Row, Col } from 'react-bootstrap';

function Welcome() {
  return (
    <Container
      fluid
      className='mb-5 bg-dark text-light border-top border-1 border-secondary py-5'
    >
      <Row className=' justify-content-center'>
        <Col xs={12} className='text-center Welcome'>
          <h1 className='fw-bolder'>Welcome in Tommy WheaterApp</h1>
          <hr className='text-dark'></hr>
          <h4 className='fs-5 fw-normal'>
            Stay ahead of the weather with real-time updates, personalized
            forecasts, and all the information you need to plan your day. Lets
            make every day a great weather day!
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;