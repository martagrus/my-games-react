import React from 'react';
import './PaddleGame.css';
import language from '../language.json';
import { EventEmitter } from '../EventEmitter';

class PaddleGame extends React.Component {
  constructor() {
    super();

    this.game = {
      gameSpeed: 1000,
      gameBoard: null,
      context: null,
      ballX: 100,
      ballY: 100,
      ballSpeedX: 5,
      ballSpeedY: 7,
      paddleWidth: 100,
      paddleHeight: 10,
      paddleDistFromEdge: 60,
      paddleX: 400
    }

    this.state = {
      gameRefreshInterval: null,
      bounces: 0,
      highScore: null,
      isFullScreen: false
    }

    // if (localStorage.getItem('highScore') > 5 && localStorage.getItem('highScore') < 10) {
    //   this.game.gameSpeed = 500
    // }

    // if (localStorage.getItem('highScore') > 10) {
    //   this.game.gameSpeed = 250
    // }

    this.updateAll = this.updateAll.bind(this);
    this.updateMousePosition = this.updateMousePosition.bind(this);

    let speed = {
      'easy': 800,
      'medium': 500,
      'hard': 250
    }

    EventEmitter.subscribe('speedChange', (event) => {
      this.setState(speed)
    })
}

  setSpeed() {
    if (localStorage.getItem('speed') !== '') {
      this.setSpeed(localStorage.getItem('speed'))
    } 
  }

  componentDidMount() {
    this.game.gameBoard = this.refs.canvas;
    this.game.context = this.refs.canvas.getContext('2d');
    this.printElements();
    this.refs.canvas.addEventListener('mousemove', this.updateMousePosition)
  }

  componentWillUnmount() {
    clearInterval(this.state.gameRefreshInterval);
  }

  updateDirection() {
    this.game.ballX += this.game.ballSpeedX;
    this.game.ballY += this.game.ballSpeedY;
  
    if(this.game.ballX < 0) {
      this.game.ballSpeedX *= -1;
    }
    if(this.game.ballX > this.game.gameBoard.width) {
      this.game.ballSpeedX *= -1;
    }
    if(this.game.ballY < 0) {
      this.game.ballSpeedY *= -1;
    }
    if(this.game.ballY > this.game.gameBoard.height) {
      this.resetBall();
      this.setState({bounces: 0})
    }
  
    let paddleTopEdgeY = this.game.gameBoard.height - this.game.paddleDistFromEdge;
    let paddleBottomEdgeY = paddleTopEdgeY + this.game.paddleHeight;
    let paddleLeftEdgeX = this.game.paddleX;
    let paddleRightEdgeX = paddleLeftEdgeX + this.game.paddleWidth;

    if (this.game.ballY > paddleTopEdgeY &&
        this.game.ballY < paddleBottomEdgeY &&
        this.game.ballX > paddleLeftEdgeX &&
        this.game.ballX < paddleRightEdgeX) {
          this.game.ballSpeedY *= -1;
          this.setState({bounces: this.state.bounces + 1})
          this.setHighScore();
        }
    }

  setHighScore() {
    let highScore = localStorage.getItem("highScore");
    
    if (highScore < this.state.bounces) {
      localStorage.setItem("highScore", this.state.bounces);
      this.setState({highScore})
    }
  }

  printElements() {
    let {context} = this.game
    context.fillStyle = 'black';
    context.fillRect(0,0, this.game.gameBoard.width, this.game.gameBoard.height)
  
    context.fillStyle = 'magenta';
    context.fillRect(this.game.paddleX, this.game.gameBoard.height - this.game.paddleDistFromEdge - this.game.paddleHeight, this.game.paddleWidth, this.game.paddleHeight)
  
    context.fillStyle = 'gold';
    context.beginPath();
    context.arc(this.game.ballX, this.game.ballY, 10, 0, Math.PI * 2, true);
    context.fill();
  }
  
  updateAll() {
    this.game.gameSpeed = this.game.gameSpeed;
    this.printElements();
    this.updateDirection();
  }
  
  updateMousePosition(ev) {
    let rect = this.refs.canvas.getBoundingClientRect();
    let mouseX = ev.clientX - rect.left;
    this.game.paddleX = mouseX - (this.game.paddleWidth / 2);
  }
  
  resetBall() {
    this.game.ballX = this.game.gameBoard.width / 2;
    this.game.ballY = this.game.gameBoard.height / 4;
  }

  setCanvasSize() {
    if(this.state.isFullScreen){
      return 'gameBoard gameBoard--full-screen'
    } else {
      return 'gameBoard'
    }
  }

  toggleFullScreen() {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  resetScore() {
    localStorage.setItem('highScore', '0');
    this.setState({bounces: 0})
  }

  startStopGame() {
    if (!this.state.gameRefreshInterval) {
      this.setState({gameRefreshInterval: setInterval(this.updateAll, this.game.gameSpeed/30)});
    } else {
      clearInterval(this.state.gameRefreshInterval);
      this.setState({gameRefreshInterval: null})
    }
  }

  render() {
    let startStopGameBtn;

    if (!this.state.gameRefreshInterval) {
      startStopGameBtn = <button className="btn btn-pg" onClick={this.startStopGame.bind(this)}>Start</button>
    } else {
      startStopGameBtn = <button className="btn btn-pg" onClick={this.startStopGame.bind(this)}>Stop</button>
    }


    return (
      <div className='background-pg'>
        <div className='board'>
        <div className='scoreBoard'>
            <h2>{language[localStorage.getItem('language')].yourScore} <span>{this.state.bounces}</span></h2>
            <h2>{language[localStorage.getItem('language')].hghScore} <span>{localStorage.getItem("highScore")}</span></h2>
          </div>
          <div className='buttonsBoard'>
            <button className="btn btn-pg" onClick={this.resetScore.bind(this)}>{language[localStorage.getItem('language')].resetPg}</button>

            {startStopGameBtn}
            
            <button className="btn btn-pg" onClick={this.toggleFullScreen.bind(this)}>{language[localStorage.getItem('language')].fullScr}</button>
          </div>
          <canvas onDoubleClick={this.toggleFullScreen.bind(this)} className={this.setCanvasSize()} ref="canvas" width="700" height="500"></canvas>
          <div className='manual'>
            <h5>{language[localStorage.getItem('language')].how}</h5>
            <h6>{language[localStorage.getItem('language')].manual}</h6>
          </div>
        </div>
      </div>
    );
  } 
}

export default PaddleGame;
