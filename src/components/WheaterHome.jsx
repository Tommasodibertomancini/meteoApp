import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import rain from '../../public/assets/media/rain.svg';
import cloudy from '../../public/assets/media/cloud.svg';
import sunny from '../../public/assets/media/sun.svg';
import suncloud from '../../public/assets/media/sun-cloud.svg';
import storm from '../../public/assets/media/storm.svg';
import snow from '../../public/assets/media/snow.svg';
import raincloud from '../../public/assets/media/rain-cloud.svg';
import { useNavigate } from 'react-router-dom';

export const handleSvg = (meteo) => {
  const dOrN = meteo.includes('d') ? 'd' : 'n';
  switch (meteo) {
    case `01${dOrN}`:
      return sunny;
    case `02${dOrN}`:
      return sunny;
    case `03${dOrN}`:
      return suncloud;
    case `04${dOrN}`:
      return cloudy;
    case `05${dOrN}`:
      return raincloud;
    case `09${dOrN}`:
      return rain;
    case `10${dOrN}`:
      return rain;
    case `13${dOrN}`:
      return snow;
    case `11${dOrN}`:
      return storm;
    default:
      return suncloud;
  }
};

function WheaterHome({ searched, nation, handleId }) {
  const kToC = (k) => {
    return (k - 273.15).toFixed(1);
  };
  const navigate = useNavigate();
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const retrieveMeteo = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searched},${nation}&appid=172979d20053a9cc518871327ae520e6`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMeteo(data);
      } else {
        throw new Error('Errore');
      }
    } catch (err) {
      console.log(err);
      navigate('/Notfound');
    }
  };
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Dicember',
  ];
  const date = new Date();
  useEffect(() => {
    setIsLoading(true);
    retrieveMeteo();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searched]);
  return (
    <>
      {isLoading ? (
        <Container fluid className='my-5'>
          <Row className=' justify-content-center'>
            <Col xs={12} md={8} className='text-center my-5'>
              <Spinner animation='border' variant='warning' />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className='shadow-custom mb-3 p-4'>
          <Row>
            <Col xs={12} className='text-left ms-2 mb-3'>
              <h1 className='mb-0'>{meteo.name}</h1>
              <h5>
                {`${days[date.getDay()]}  ${date.getDate()} ${
                  months[date.getMonth()]
                }`}{' '}
              </h5>
            </Col>
            <Col xs={12} md={6}>
              <Row className='mb-3'>
                <Col xs={12} className='mb-3 text-center'>
                  <img
                    alt=''
                    src={handleSvg(meteo.weather[0].icon)}
                    style={{ width: '350px', height: '350px' }}
                  />
                </Col>
                <Col xs={12}>
                  <p className='fs-1 text-center'>
                    {kToC(meteo.main.temp)}
                    <sup>°C</sup>
                  </p>
                </Col>
                <Col xs={12}>
                  <h6 className='mb-1 text-center'>
                    Humidity: {meteo.main.humidity}%
                  </h6>
                  <h6 className='mb-1 text-center'>
                    Feels like: {kToC(meteo.main.feels_like)}
                    <sup>°C</sup>
                  </h6>
                  <h6 className='mb-1 text-center'>
                    Wind speed {meteo.wind.speed}
                    <sup>m/s</sup>
                  </h6>
                  <h6 className='mb-1 text-center'>
                    Sea level: {meteo.main.sea_level}m
                  </h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} className='mb-3 text-md-end'>
                  <p className='fs-4 d-inline blue'>
                    Min {kToC(meteo.main.temp_min)}
                    <sup>°C</sup>
                  </p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='55'
                    height='55'
                    fill='blue'
                    className='bi bi-thermometer d-none d-md-inline'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
                    <path d='M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0M6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15z' />
                  </svg>
                </Col>
                <Col xs={12} className='mb-3 text-md-end'>
                  <p className='fs-4 d-inline text-danger'>
                    Max {kToC(meteo.main.temp_max)}
                    <sup>°C</sup>
                  </p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='55'
                    height='55'
                    fill='red'
                    className='bi bi-thermometer-high d-none d-md-inline'
                    viewBox='0 0 16 16'
                  >
                    <path d='M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415' />
                    <path d='M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1' />
                  </svg>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className='d-flex justify-content-end'>
            <Button
              className='text-white justify-content-end mb-2 me-2'
              variant='warning'
              onClick={() => {
                handleId(meteo.id);
                navigate(`/details/${meteo.id}`);
              }}
            >
              Next 5 days weather
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}

export default WheaterHome;
