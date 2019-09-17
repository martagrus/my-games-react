import React from 'react';
import './HomePage.css';
import language from '../language.json';



class HomePage extends React.Component {
 
  setLang(language) {
    localStorage.setItem('language', language);
  }
    
  render(){
    return (
      <div className='home-page'>
        <p>
        {language[localStorage.getItem('language')].title}
        </p>
      </div>
    );
  }
}

export default HomePage;
