import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ handleResearch, handleNation }) => {
  const navigate = useNavigate();
  useEffect(() => {
    handleResearch('');
    handleNation('');
  });
  return (
    <Container className='bg-dark'>
      <Row className='justify-content-center my-4'>
        <Col xs={12} md={6} className='text-center text-white'>
          <h2 className='mb-4'>404 - Not Found</h2>
          <hr className='text-dark'></hr>
          <h4 className='mb-3'>
           This city doesn't exist! Try to search a different city!
          </h4>
          <hr className='text-dark'></hr>
          <Button
          className='text-white'
            variant='warning'
            onClick={() => {
              navigate('/');
            }}
          >
            Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
