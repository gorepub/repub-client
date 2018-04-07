import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
} from 'reactstrap';

import {Link} from 'react-router-dom';

import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h2 className="space-top center"> Prazer em ter você aqui, nós somos a repub !</h2>
          </Col>
          <Col md="12">
            <p className="find-vacancies center">Aqui, você encontra vagas em repúblicas de estudantes ou simplesmente <br/> publicar a sua, tudo de forma rápida e gratuita ! Vamos começar ?</p>
          </Col>
          <Col md="12 center">
            <Button color="info">Quero encontrar vagas</Button>
            <Button color="info"><Link to= "/sign_in">Quero anunciar vagas</Link></Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
