import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

// HomePage ...
// import HomePage from './components/pages/HomePage';

const App = () => (
  <div>
    <Container>
        <Row>
        <div>
          <Col><h2 className="space-top">Prazer em ter você aqui. Nós somos a repub.</h2></Col>
          <Col><h5>Aqui, você pode encontrar vagas
             para morar em república ou simplesmente publicar a sua!</h5></Col>
        </div>
        </Row>
      </Container>
  </div>
);

export default App;
