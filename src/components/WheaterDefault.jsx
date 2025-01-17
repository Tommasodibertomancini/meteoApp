import { Container, Row, Col } from 'react-bootstrap';
import WheaterHome from './WheaterHome';

function WheaterDefault(props) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          {!props.searched ? (
            <>
              <WheaterHome
                searched={'Rome'}
                nation={'IT'}
                handleId={props.handleId}
              />
              <WheaterHome
                searched={'London'}
                nation={'GB'}
                handleId={props.handleId}
              />
              <WheaterHome
                searched={'Los Angeles'}
                nation={'US'}
                handleId={props.handleId}
              />
              <WheaterHome
                searched={'Madrid'}
                nation={'ES'}
                handleId={props.handleId}
              />
            </>
          ) : (
            <WheaterHome
              searched={props.searched}
              nation={props.nation}
              handleId={props.handleId}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default WheaterDefault;
