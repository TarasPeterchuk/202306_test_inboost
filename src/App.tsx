import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './app.scss';
import Board from './components/board/Board';

function App() {
  return (
    <Provider store={store}>
      <div className="board">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
