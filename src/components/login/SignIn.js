import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './SignIn.css';

class SignIn extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="12 center">
            <h2 className="space-top">Seja bem-vindo! Pronto para publicar sua vaga ?</h2>
          </Col>
          <Col md="12">
            <Form>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label className="space-top">Email</Label>
                  <Input type="email" name="email" placeholder="Informe seu e-mail por gentileza" />
                </FormGroup>
              </Col>
              <Col md={{ size: 6, offset: 3 }}>
                <FormGroup>
                  <Label>Senha</Label>
                  <Input type="password" name="password" placeholder="Coloque sua senha" />
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 5 }}>
                <Button color="primary" size="lg" active>Login</Button>
              </Col>
            </Form>
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
