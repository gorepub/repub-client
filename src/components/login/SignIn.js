import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

class SignIn extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md="12 center">
            <h2 className="space-top">Seja bem-vindo, pronto para publicar sua vaga ?</h2>
          </Col>
          <Col md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label className="space-top">Email</Label>
                <Input type="email" name="email" placeholder="Informe seu e-mail por gentileza" />
              </FormGroup>
              <FormGroup>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="Coloque sua senha" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
