import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './app.scss';
import Container from './components/container/Container';

function App() {
  return (
    <Provider store={store}>
      <div className="board">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
