import React from 'react';
import './Settings.css';
import language from '../language.json';

class Settings extends React.Component {
    
    setLang(language) {
        localStorage.setItem('language', language);
      }
    
render(){
    return (
        <div className="langs">
            <h5>Choose your language:</h5>
            <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
            <button className="btn btn-danger" onClick={this.setLang.bind(this, 'en')}>EN</button>
        </div>
    );
}
}

export default Settings;