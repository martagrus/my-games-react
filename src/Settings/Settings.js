import React from 'react';
import './Settings.css';
import language from '../language.json';
import { EventEmitter } from '../EventEmitter';

class Settings extends React.Component {
    setLang(language) {
        localStorage.setItem('language', language);
        EventEmitter.dispatch('languageChange', true)
    }

    setSpeed(speed) {
        localStorage.setItem('speed', speed);
        EventEmitter.dispatch('speedChange', true)
    }
    
    
render(){
    return (
        <div className='background-s'>
            <div className="langs">
                <h5>{language[localStorage.getItem('language')].lang}</h5>
                <button className="btn btn-s" onClick={this.setLang.bind(this, 'pl')}>PL</button>
                <button className="btn btn-s" onClick={this.setLang.bind(this, 'en')}>EN</button>
                <button className="btn btn-s" onClick={this.setLang.bind(this, 'de')}>DE</button>
            </div>
            <div className='speed'>
                <h5>{language[localStorage.getItem('language')].speed}</h5>
                <div>
                <input type="radio" name="speed" value="easy" className='radioBtn' onClick={this.setSpeed.bind(this, 'easy')}/>{language[localStorage.getItem('language')].easySpeed}
                </div>
                <div>
                <input type="radio" name="speed" value="medium" className='radioBtn' onClick={this.setSpeed.bind(this, 'medium')}/>{language[localStorage.getItem('language')].mediumSpeed}
                </div>
                <div>
                <input type="radio" name="speed" value="hard" className='radioBtn' onClick={this.setSpeed.bind(this, 'hard')}/>{language[localStorage.getItem('language')].fastSpeed}
                </div>
            </div>
        </div>
    );
}
}

export default Settings;