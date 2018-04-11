import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

const NotFoundPage = () => (
  <Container>
    <Row>
      <Col md='12'>
        <h1 className='space-top center'>Page not found !</h1>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
