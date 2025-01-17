import { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { handleSvg } from './WheaterHome';

function WeeklyMeteo({ handleResearch, handleNation }) {
  const [meteo, setMeteo] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const fetchWeek = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${params.city}&appid=172979d20053a9cc518871327ae520e6`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMeteo(data);
        const filter = data.list.filter((list) => {
          return list.dt_txt.includes('15:00');
        });
        setList(filter);
      } else {
        throw new Error('errore');
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
  const kToC = (k) => {
    return (k - 273.15).toFixed(2);
  };

  useEffect(() => {
    fetchWeek();
    handleResearch('');
    handleNation('');
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          {isLoading ? (
            <Container fluid className='my-5'>
              <Row className=' justify-content-center'>
                <Col xs={12} md={8} className='text-center my-5'>
                <Spinner animation="border" variant="warning" />
                </Col>
              </Row>
            </Container>
          ) : (
            <Container className='my-3 shadow-custom p-4'>
              <Row>
                <Col className='mb-5'>
                  <h1>{meteo.city.name}</h1>
                  <h4>Next 5 days report</h4>
                </Col>
              </Row>
              <Row className='mb-4' xs={2} md={5}>
                {list.map((weather) => {
                  return (
                    <Col key={weather.dt} className='mb-4'>
                      <Row>
                        <Col xs={12}>
                          <h5>{days[new Date(weather.dt_txt).getDay()]}</h5>
                        </Col>
                        <Col xs={12} className='mb-3'>
                          <img
                            alt=''
                            src={handleSvg(weather.weather[0].icon)}
                          ></img>
                        </Col>
                        <Col xs={12}>
                          <p className='fs-6 mb-0'>
                            Temp {kToC(weather.main.temp)}
                            <sup>°C</sup>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className='fs-6 mb-0'>
                            Humidity: {weather.main.humidity}%
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className='fs-6 mb-0'>
                            Feels like: {kToC(weather.main.feels_like)}
                            <sup>°C</sup>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <p className='fs-6 mb-0'>
                            Wind speed {weather.wind.speed}
                            <sup>m/s</sup>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col>
                  <Button
                    variant='danger'
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Homepage
                  </Button>
                </Col>
              </Row>
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default WeeklyMeteo;
