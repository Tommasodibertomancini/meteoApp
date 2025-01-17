import { Container, Row, Col } from 'react-bootstrap';
import WheaterHome from './WheaterHome';

function WheaterDefault(props) {
  return (
    <Container fluid>
      <Row>
        {!props.searched ? (
          <>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'Rome'}
                nation={'IT'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'London'}
                nation={'GB'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'Los Angeles'}
                nation={'US'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'Madrid'}
                nation={'ES'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'Sydney'}
                nation={'AU'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            <Col xs={12} lg={6} className='mb-3'>
              <WheaterHome
                searched={'Tokyo'}
                nation={'JP'}
                handleId={props.handleId}
                isFullPage={false}
              />
            </Col>
            
          </>
        ) : (
          <WheaterHome
            searched={props.searched}
            nation={props.nation}
            handleId={props.handleId}
            isFullPage={true}
          />
        )}
      </Row>
    </Container>
  );
}

export default WheaterDefault;
