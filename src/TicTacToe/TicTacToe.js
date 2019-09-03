import React from 'react';
import './TicTacToe.css';
import eks from './x.jpg';
import o from './o.jpg';

class TicTacToe extends React.Component {
    constructor() {
        super();

        this.state = {
            player1: 'o',
            player2: 'x',
            turn: 0,
            board: [
                '', '', '',
                '', '', '',
                '', '', '',
            ],
            gameEnabled: true
        }
    }

    checkGameStatus(selectedPlayer) {
        for (let i = 0; i <= 6; i = i + 3) {
            if (!!this.state.board[i] && !!this.state.board[i+1] && !!this.state.board[i+2]) {
                if (this.state.board[i] === this.state.board[i+1] && this.state.board[i+1] === this.state.board[i+2]) {
                    this.endGame(selectedPlayer);
                }
            }
          }
      
        for (let i = 0; i < 3; i++) {
            if (!!this.state.board[i] && !!this.state.board[i+3] && !!this.state.board[i+6]) {
                if (this.state.board[i] === this.state.board[i+3] && this.state.board[i+3] === this.state.board[i+6]) {
                    this.endGame(selectedPlayer);
                }
            }
        }
    
        if (!!this.state.board[0] && !!this.state.board[4] && !!this.state.board[8]) {
            if (this.state.board[0] === this.state.board[4] && this.state.board[4] === this.state.board[8]) {
                this.endGame(selectedPlayer);
            }
        }
    
        if (!!this.state.board[2] && !!this.state.board[4] && !!this.state.board[6]) {
            if (this.state.board[2] === this.state.board[4] && this.state.board[4] === this.state.board[6]) {
                this.endGame(selectedPlayer);
            }
        }

        if (this.state.gameEnabled && this.state.turn > 7) {
            this.endGame(false);
          }      
    }  
      
    computerTurn() {
        let board = this.state.board;
    
        function _getRandomInt() {
          let min = Math.ceil(0);
          let max = Math.floor(8);
    
          return Math.floor(Math.random() * (max - min -1)) + min;
        }
    
        let computerFieldSelected = _getRandomInt();
    
        if (board[computerFieldSelected] === '') {
          board[computerFieldSelected] = <img src={o} alt="O" />
        } else if (this.state.gameEnabled && this.state.board.indexOf('') >= 0) {
          this.computerTurn();
          return;
        } else return;
    
        this.setState({
          turn: this.state.turn + 1,
          board
        })
    
        this.checkGameStatus('o');
    }    

    onFieldClick(index) {
        if (!this.state.gameEnabled) { return };
        if (this.state.board[index] !== '') { alert('This one is taken!'); return };
    
        let board = this.state.board;
        board[index] = <img src={eks} alt="X" />;
    
        this.setState({
          turn: this.state.turn + 1,
          board
        })
    
        this.checkGameStatus('x');
    
        this.computerTurn();
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
    
        if (selectedPlayer) {
            alert(`Congrats, the winner is: ${selectedPlayer}`);
        } else {
            alert('There is no winner')
        }
    }
    
    checkIfFieldIsNotEmpty(field) {
        if (field.length > 0) {
          return 'game-board--field game-board--field--disabled';
        } else {
          return 'game-board--field'
        }
    }    

    render(){
        return (
            <div className="game-container">
                <div className="game-board">
                    { this.state.board.map((field, key) => {
                        return (
                            <div className="game-board--field" key={key} onClick={this.onFieldClick.bind(this, key)}>
                                <div className="game-board--field-content">{field}</div>
                            </div>
                        )
                    }) }
                </div>
                <button onClick={this.resetGameBoard.bind(this)} className="btn btn-danger">Reset Game</button>
            </div>
        );
    }
}

export default TicTacToe;