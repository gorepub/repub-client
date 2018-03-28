import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 12, offset: 1 }} md={{ size: 12, offset: 2 }}>
            <h2 className="space-top"> Prazer em ter você aqui. Nós somos a repub.</h2>
          </Col>
          <Col sm={{ size: 12, offset: 1 }} md={{ size: 12, offset: 2 }}>
            <h5 className="find-vacancies">Aqui, você pode encontrar vagas para morar em república ou simplesmente publicar a sua!</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
