import React from 'react';
import './Settings.css';
import language from '../language.json';
import { EventEmitter } from '../EventEmitter';

class Settings extends React.Component {
    constructor() {
        super();
      }
    
    setLang(lang) {
    localStorage.setItem('language', lang);
    EventEmitter.dispatch('languageChange', true)
    }
    
    
render(){
    return (
        <div>
            <div className="langs">
                <h5>{language[localStorage.getItem('language')].lang}</h5>
                <button className="btn btn-danger" onClick={this.setLang.bind(this, 'pl')}>PL</button>
                <button className="btn btn-danger" onClick={this.setLang.bind(this, 'en')}>EN</button>
            </div>
            <div className='speed'>
                <h5>{language[localStorage.getItem('language')].speed}</h5>
                <input type='range' className='slider'></input>
            </div>
        </div>
    );
}
}

export default Settings;