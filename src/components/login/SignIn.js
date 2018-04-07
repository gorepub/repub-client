import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

class SignIn extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="12 center">
            <h2 className="space-top">Bem-vindo</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
