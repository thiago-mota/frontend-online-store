import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/Cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
