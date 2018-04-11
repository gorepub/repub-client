import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import SignInForm from '../forms/SignInForm';

class SignIn extends React.Component {

  // TODO: call login action
  submit = data => console.log('data submited', data)

  render() {
    return (
      <Container>
        <Row>
          <Col md="12 center">
            <h2 className="space-top">Seja bem-vindo! Pronto para publicar sua vaga ?</h2>
          </Col>
          <Col md="12">
            <SignInForm
              submit={this.submit}
            />
          </Col>
          <Col md="12">
            <p className="center"><Link to= "/sign_up">Você é novo aqui? Cadastre-se agora!</Link></p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
