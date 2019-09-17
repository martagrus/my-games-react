import React from 'react';
import './TicTacToe.css';
import eks from '../pictures/x.jpg';
import o from '../pictures/o.jpg';
import language from '../language.json';

class TicTacToe extends React.Component {
    constructor() {
        super();
    
        this.state = {
            turn: 0,
            board: [
                '', '', '',
                '', '', '',
                '', '', '',
            ],
            gameEnabled: true,
            info: null
        }
    };

    checkGameStatus(selectedPlayer) {

        if (this.state.gameEnabled) {
            if (this.sameAcrossRight(selectedPlayer) || this.sameAcrossLeft(selectedPlayer) || this.sameVertical(selectedPlayer) || this.sameHorizontal(selectedPlayer)) {
                this.endGame(selectedPlayer);
            } else if (this.state.turn > 7) {
                this.endGame(false);
                }
        }      
    }  

    sameVertical = () => {
        let {board} = this.state
        for (let i = 0; i <= 6; i = i + 3) {
            if (board[i] && board[i+1] && board[i+2]) {
                if (board[i] === board[i+1] && board[i+1] === board[i+2]) {
                    return true;
                }
            }
        }
    }

    sameHorizontal = () => {
        let {board} = this.state
        for (let i = 0; i < 3; i++) {
            if (board[i] && board[i+3] && board[i+6]) {
                if (board[i] === board[i+3] && board[i+3] === board[i+6]) {
                    return true;
                }
            }
        }
    }
      
    sameAcrossRight = () => {
        let {board} = this.state
        if (board[2] && board[4] && board[6]) {
            if (board[2] === board[4] && board[4] === board[6]) {
                return true;
            }
        }
    }

    sameAcrossLeft = () => {
        let {board} = this.state
        if (board[0] && board[4] && board[8]) {
            if (board[0] === board[4] && board[4] === board[8]) {
                return true;
            }
        }
    }

    computerTurn() {
        let {board} = this.state
    
        function _getRandomInt() {
          let min = Math.ceil(0);
          let max = Math.floor(8);
    
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        let computerFieldSelected = _getRandomInt();
    
        if (board[computerFieldSelected] === '') {
          board[computerFieldSelected] = 'x'
        } else if (this.state.gameEnabled && this.state.board.indexOf('') >= 0) {
          this.computerTurn();
          return;
        } else return;
    
        this.setState({
          turn: this.state.turn + 1,
          board
        })
    
        this.checkGameStatus('x');
    }    

    onFieldClick(index) {
        // if (!this.state.gameEnabled) { return };
        // if (this.state.board[index] !== '') { alert('This one is taken!'); return };
        
    
        let {board} = this.state;
        board[index] = 'o';
    
        if (this.checkGameStatus(this.selectedPlayer)) {
            this.info = <h1>Congrats, the winner is: ${this.selectedPlayer}</h1>;
        } else {
            this.info = <h1>There is no winner</h1>
        }

        if (!this.state.gameEnabled) { return }
            else if (this.state.board[index] !== '') { 
            this.info = <h1>This one is taken!</h1>; 
        }

        this.setState({
            info: this.info,
            turn: this.state.turn + 1,
            board,
            }, this.computerTurn)
    
        this.checkGameStatus('o');
    }

    resetGameBoard() {
        this.setState({
            board: [
                '', '', '',
                '', '', '',
                '', '', '',
            ],
            turn: 0,
            gameEnabled: true
        })
    }

    endGame(selectedPlayer) {
        this.setState({
          gameEnabled: false,
        })
    
        if (!this.state.gameEnabled) {
          return;
        }
    
        // if (selectedPlayer) {
        //     alert(`Congrats, the winner is: ${selectedPlayer}`);
        // } else {
        //     alert('There is no winner')
        // }
    }
    
    checkIfFieldIsNotEmpty(field) {
        if (field.length > 0) {
          return 'game-board--field game-board--field--disabled';
        } else {
          return 'game-board--field'
        }
    }    

    render(){
        // let this.state.info;

        // if (this.checkGameStatus(this.selectedPlayer)) {
        //     info = <h1>Congrats, the winner is: ${this.selectedPlayer}</h1>;
        // } else {
        //     info = <h1>There is no winner</h1>
        // }

        // if (this.onFieldClick(index)) { 
        //     info = <h1>This one is taken!</h1>; 
        // }

        return (
            <div className="game-container background-ttt">

                {this.state.info}

                <div className="game-board">
                    { this.state.board.map((field, key) => {
                        return (
                            <div className="game-board--field" key={key} onClick={this.onFieldClick.bind(this, key)}>
                                <div className="game-board--field-content">{field === 'x' ? <img src={eks} alt="X" /> :  field === 'o' ?<img src={o} alt="O" /> : null}</div>
                            </div>
                        )
                    }) }
                </div>
                <button onClick={this.resetGameBoard.bind(this)} className="btn">{language[localStorage.getItem('language')].rstBtn}</button>
            </div>
        );
    }
}

export default TicTacToe;