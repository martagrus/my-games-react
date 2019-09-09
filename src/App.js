import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './App.css';
import HomePage from './HomePage/HomePage';
import TicTacToe from './TicTacToe/TicTacToe';
import PaddleGame from './PaddleGame/PaddleGame';
import Settings from './Settings/Settings';
import language from './language.json';

class App extends React.Component {
  constructor() {
    super();

    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
  }

  render(){
    return (
      <>
      <Router>
        <div className="container">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Link className="nav-link" to="/">Main page</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/tictactoe">Tic Tac toe</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/paddle">Paddle Game</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/settings">Settings</Link>
            </Nav.Item>
        </Nav>
        </div>
        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/tictactoe" component={TicTacToe}/>
          <Route path="/paddle" component={PaddleGame}/>
          <Route path="/settings" component={Settings}/>
        </div>
      </Router>
      
      </>
    );
  }
}

export default App;