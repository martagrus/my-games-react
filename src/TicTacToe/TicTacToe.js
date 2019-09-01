import React from 'react';
import './TicTacToe.css';

class TicTacToe extends React.Component {
    constructor() {
        super();

        this.state = {
            player1: 'O',
            player2: 'X',
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
        for (let i=0; i<=6; i=i+3){
            if(!!this.state.board[i] && !!this.state.board[i+1] && !!this.state.board[i+2]) {
                if (this.state.board[i] === this.state.board[i+1] === this.state.board[i+2]) {
                    this.endGame(selectedPlayer);
                }
            }
        }

        for (let i=0; i<3; i=i++){
            if(!!this.state.board[i] && !!this.state.board[i+3] && !!this.state.board[i+6]) {
                if (this.state.board[i] === this.state.board[i+3] === this.state.board[i+6]) {
                    this.endGame(selectedPlayer);
                }
            }
        }

        if(!!this.state.board[0] && !!this.state.board[4] && !!this.state.board[8]) {
            if (this.state.board[0] === this.state.board[4] === this.state.board[8]) {
                this.endGame(selectedPlayer);
            }
        }

        if(!!this.state.board[2] && !!this.state.board[4] && !!this.state.board[6]) {
            if (this.state.board[2] === this.state.board[4] === this.state.board[6]) {
                this.endGame(selectedPlayer);
            }
        }
    }

    onFieldClick(index) {
        if (!this.state.gameEnabled) {return};
        if (this.state.board[index] !== '') { alert('Ups! This place is already taken!'); return};

        let selectedPlayerTag = this.state.turn % 2 === 0  ? this.state.player1 : this.state.player2;
        let board = this.state.board;
        board[index] = selectedPlayerTag;
        let nextTurnNumber = new Number(this.state.turn) + 1;
        
        this.setState({
        turn: nextTurnNumber,
        board
        })

        this.checkGameStatus(selectedPlayerTag);
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

    endGame(selectedPlayer){
        console.log("Congrats, you've won!", selectedPlayer);
        this.setState({
            gameEnabled : false
        })
    }

    render(){
        return (
            <>
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
            </>
        );
    }
}

export default TicTacToe;