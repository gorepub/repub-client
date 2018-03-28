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
          <Col md="12 center">
            <h2 className="space-top">Anuncie sua vaga</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardPage;
