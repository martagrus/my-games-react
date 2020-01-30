import React from 'react';
import './TicTacToe.css';
import eks from '../assets/pictures/x.jpg';
import o from '../assets/pictures/o.jpg';
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
            gameEnabled: true
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
          board[computerFieldSelected] = 'X'
        } else if (this.state.gameEnabled && this.state.board.indexOf('') >= 0) {
          this.computerTurn();
          return;
        } else return;
    
        this.setState({
          turn: this.state.turn + 1,
          board
        })
    
        this.checkGameStatus('X');
    }    

    onFieldClick(index) {
        if (!this.state.gameEnabled) { return };
        if (this.state.board[index] !== '') {
            this.setState({error:<p className="error">{language[localStorage.getItem('language')].taken}</p>}); return
        } else { 
            this.setState({error: false})
        }
        
        let {board} = this.state;
        board[index] = 'O';
    
        this.setState({
            turn: this.state.turn + 1,
            board,
            index: this.state.board[index],
            }, this.computerTurn)
    
        this.checkGameStatus('O');
    }

    resetGameBoard() {
        this.setState({
            board: [
                '', '', '',
                '', '', '',
                '', '', '',
            ],
            turn: 0,
            gameEnabled: true,
            error: false
        })
    }

    endGame(selectedPlayer) {
        this.setState({
          gameEnabled: false,
          winner: selectedPlayer,
        })
    
        if (!this.state.gameEnabled) {
          return;
        }
    }
    
    checkIfFieldIsNotEmpty(field) {
        if (field.length > 0) {
          return 'game-board--field game-board--field--disabled'
        } else {
          return 'game-board--field'
        }        
    }    

    render(){
        let info;

        if (!this.state.gameEnabled) {
            if (this.state.winner) {
                info = <p className='winnerInfo'>{language[localStorage.getItem('language')].winner} {this.state.winner}</p>;
            } else {
                info = <p className='winnerInfo'>{language[localStorage.getItem('language')].noWinner}</p>
            }
        }

        const {error} = this.state;

        return (
            <div className="game-container background-ttt">

                {info}
                {error ? <div className="error"> {error} </div> : ''}

                <div className="game-board">
                    { this.state.board.map((field, key) => {
                        return (
                            <div className="game-board--field" key={key} onClick={this.onFieldClick.bind(this, key)}>
                                <div className="game-board--field-content">{field === 'X' ? <img src={eks} alt="X" /> :  field === 'O' ?<img src={o} alt="O" /> : null}</div>
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