import { Facebook, Instagram, TwitterX, Youtube } from 'react-bootstrap-icons';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const WheaterFooter = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-1 mb-md-0">
            <h5>Weather App</h5>
            <p>&copy; 2025 Tommy WheaterApp, All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={4} className="mb-1 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className='d-flex justify-content-center'>
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Weekly Forecast
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                About Us
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4}>
            <h5>Follow Us</h5>
            <Row>
              <Col className='mb-2'>
                <Facebook className='footer-icon me-2'></Facebook>
                <Instagram className='footer-icon me-2'></Instagram>
                <TwitterX className='footer-icon me-2'></TwitterX>
                <Youtube className='footer-icon'></Youtube>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default WheaterFooter;