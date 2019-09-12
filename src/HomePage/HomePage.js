import React from 'react';
import './HomePage.css';
import language from '../language.json';


class HomePage extends React.Component {
 
  setLang(language) {
    localStorage.setItem('language', language);
  }
    

  render(){
    return (
      <p>
      {language[localStorage.getItem('language')].title}
      </p>
    );
  }
}

export default HomePage;
