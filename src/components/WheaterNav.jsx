import { useState } from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function WheaterNav({ handleResearch, handleNation, id }) {
  const [research, setResearch] = useState('');
  const [nation, setNation] = useState('');
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResearch(research);
    handleNation(nation);
    setResearch('');
    setNation('');
  };

  return (
    <Navbar expand='sm' bg='dark' data-bs-theme='dark'>
      <Container fluid>
        <Navbar.Brand href='javascript:voide(0)'>
          <img
            src='../../public/assets/media/tomwheater.png'
            style={{ width: '60px', height: '60px' }}
            alt='Logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='me-auto'>
          <Link
            to='/'
            className={isActive('/')}
            onClick={() => {
              handleResearch('');
              handleNation('');
            }}
          >
            Home
          </Link>
          <Link href='javascript:void(0)' className={isActive(`/details/&{id}`)}>
            Details
          </Link>
          <Link href='javascript:void(0)' className={isActive(`/favourites/&{id}`)}>
            Favourites
          </Link>
        </Nav>
        {location.pathname === '/' ? (
          <Form onSubmit={(e) => handleSubmit(e)} className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Find your city'
              className='me-2'
              aria-label='Search'
              value={research}
              onChange={(e) => setResearch(e.target.value)}
              required
            />

            <Form.Control
              type='text'
              placeholder='Insert your Country Code '
              className='me-2'
              aria-label='Search'
              value={nation}
              maxLength={2}
              onChange={(e) => setNation(e.target.value)}
            />
            <Button type='submit' variant='outline-warning text-white'>
              Search
            </Button>
          </Form>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
}

export default WheaterNav;
