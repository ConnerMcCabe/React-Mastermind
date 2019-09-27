import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.genCode(),
    };
  };


genCode() {
  return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
};
getNewGuess() {
  return {
    //TODO: for dev/testing 
    // code: [null, null, null, null],
    code: [3, 2, 1, 0],
    score: {
      perfect: 0,
      almost: 0,
    }
  }
};
getWinTries() {
  let lastGuess = this.state.guesses.length - 1;
  return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
}

  render() {
    let winTries = this.getWinTries();
      return (
      <div className="App">
        <header className="App-header-footer">React Mastermind</header>
      
        <div className="flex-h align-flex-end">
          <GameBoard colors={colors} guesses={this.state.guesses}
          />
          <div>
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx}/>
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className='App-header-footer'>
          {(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
        </footer>
      </div>
    );
  }
}

{/* <button onClick={() => this.setState((state) => {
          return { selColorIdx: ++state.selColorIdx % 4 };
        })}>
          Next Color
        </button> */}
export default App;