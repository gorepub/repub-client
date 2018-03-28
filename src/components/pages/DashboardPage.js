import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

class DashboardPage extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 12, offset: 1 }} md={{ size: 12, offset: 2 }}>
            <h2 className="space-top">Anuncie sua vaga</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardPage;
