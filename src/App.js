import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './App.css';
import HomePage from './HomePage/HomePage';
import TicTacToe from './TicTacToe/TicTacToe';
import PaddleGame from './PaddleGame/PaddleGame';
import Settings from './Settings/Settings';
import language from './language.json';
import { EventEmitter } from './EventEmitter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      appRefreshed: null
    }

    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }

    EventEmitter.subscribe('languageChange', (event) => {
      this.setState({
        appRefreshed: new Date()
      })
    })
  }


  setLang(language) {
    localStorage.setItem('language', language);
  }

  render(){
    return (
      <>
      <Router>
        <div className="container">
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Link className="nav-link" to="/">{language[localStorage.getItem('language')].main}</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/tictactoe">{language[localStorage.getItem('language')].tictactoe}</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/paddle">{language[localStorage.getItem('language')].paddle}</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/settings">{language[localStorage.getItem('language')].settings}</Link>
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