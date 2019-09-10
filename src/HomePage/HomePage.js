import React from 'react';
import './HomePage.css';
import language from '../language.json';


class HomePage extends React.Component {
 
  setLang(language) {
    localStorage.setItem('language', language);
  }
    

  render(){
    console.log(language)
    console.log(localStorage.getItem('language'))
    return (
      <p>
      {language[localStorage.getItem('language')].title}
      </p>
    );
  }
}

export default HomePage;
