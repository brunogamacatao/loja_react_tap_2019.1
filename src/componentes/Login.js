import React, { Component } from 'react';

class Login extends Component {
  
  render(){
    return (
      <>
      <h1>Entre com sua conta:</h1>
      
      <label>Email:</label>
      <input type="email" required></input>
      
      <label>Senha:</label>
      <input type="password" required></input>
      
      <input type="submit"></input>
      </>
      );
    }
    
  }
  
  export default Login;