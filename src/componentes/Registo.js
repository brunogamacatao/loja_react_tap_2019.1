import React, { Component } from 'react';

class Registro extends Component {
  render(){
    return (
      <>
      <h1>Registre-se:</h1>
      
      <label>Nome:</label>
      <input type="text" required></input>
      
      <label>Email:</label>
      <input type="email" required></input>
      
      <label>Senha:</label>
      <input type="password" required></input>
      
      <input type="submit"></input>
      </>
    );
  } 
}

export default Registro;