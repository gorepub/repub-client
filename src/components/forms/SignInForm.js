import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class SignInForm extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    }
  };

  onSubmit = e => {
    // TODO: Implement submit
    e.preventDefault();
    this.props.submit(this.state.data);
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Col md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Label className="space-top">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Informe seu e-mail por gentileza"
              value={data.email}
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col md={{ size: 6, offset: 3 }}>
          <FormGroup>
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              placeholder="Coloque sua senha"
              value={data.password}
              onChange={this.onChange}
            />
          </FormGroup>
        </Col>
        <Col md={{ size: 3, offset: 5 }}>
          <Button color="primary" size="lg" active>Login</Button>
        </Col>
      </Form>
    );
  }
}

SignInForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignInForm;
