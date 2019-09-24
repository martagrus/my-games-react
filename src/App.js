import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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

    let langs =[
      'en',
      'pl',
      'de'
    ]

    if (!localStorage.getItem('language') 
    || typeof localStorage.getItem('language') !== 'string'
    || langs.indexOf(localStorage.getItem('language')) < 0) {
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
        <div>
          <nav className='nav'>
            <Link className='nav-item' to="/">{language[localStorage.getItem('language')].main}</Link>
            <Link className='nav-item' to="/tictactoe">{language[localStorage.getItem('language')].tictactoe}</Link>
            <Link className='nav-item' to="/paddle">{language[localStorage.getItem('language')].paddle}</Link>
            <Link className='nav-item' to="/settings">{language[localStorage.getItem('language')].settings}</Link>
          </nav>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/tictactoe" component={TicTacToe}/>
            <Route path="/paddle" component={PaddleGame}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </Router>
      </>
    );
  }
}

export default App;