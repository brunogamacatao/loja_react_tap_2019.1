import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Login extends Component {  
  render(){
    return (
      <Col xs={4}>
        <Card>
          <Card.Header as="h4">Entre com sua conta:</Card.Header>

          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Seu E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Insira seu e-mail" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Senha" required />
            </Form.Group>

            <Button variant="outline-primary" block onClick={() => this.context.fazerLogin()}>
              Fazer login
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
    
}

Login.contextType = LojaContext;


export default Login;