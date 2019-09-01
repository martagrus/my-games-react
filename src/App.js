import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './App.css';
import HomePage from './HomePage/HomePage';
import TicTacToe from './TicTacToe/TicTacToe';

class App extends React.Component {
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
              <Link className="nav-link" to="/surprise">Surprise</Link>
            </Nav.Item>
        </Nav>
        </div>
        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/tictactoe" component={TicTacToe}/>
        </div>
      </Router>
      
      </>
    );
  }
}

export default App;