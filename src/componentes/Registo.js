import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Registro extends Component {
  render(){
    return (
      <Col xs={4}>
        <Card className="">
          <Card.Header as="h4">Registre-se:</Card.Header>

          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Seu Nome:</Form.Label>
              <Form.Control type="text" placeholder="Insira seu primeiro nome" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Seu E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Insira seu e-mail" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Senha" required />
            </Form.Group>

            <Button variant="outline-primary" block onClick={() => this.context.fazerLogin()}>
              Efetuar cadastro
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  } 
}

Registro.contextType = LojaContext;

export default Registro;