import React, { Component } from 'react';
import { LojaProvider } from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import ListaDeProdutos from './ListaDeProdutos';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import DetalheProduto from './DetalheProduto';
import { BrowserRouter, Switch, Route } from '../../react-router-dom';


class Loja extends Component {
  render() {
    return (
      <LojaProvider>
        <BarraDeBusca/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ListaDeProdutos} />
            <Route path="/produtos" exact component={ListaDeProdutos} />
            <Route path="/produtos/:id" component={DetalheProduto} />
            <Route component={PaginaNaoEncontrada} />
          </Switch>
        </BrowserRouter>
        <CarrinhoDeCompras/>
      </LojaProvider>
    );
  }
}

export default Loja;