import React from 'react';

import TimerButton from '../components/TimerButton';
import Logs from '../components/Logs';

import useTimers from '../hooks/useTimers';

import './style.css';

function App() {
  const [add, clear, logs] = useTimers();

  return (
    <div className="App">
      <div className="App__top">
        <TimerButton text="Таймер 1" num={1} onClick={add} />
        <TimerButton text="Таймер 2" num={2} onClick={add} />
        <TimerButton text="Таймер 3" num={3} onClick={add} />
        <TimerButton text="Таймер 4" num={4} onClick={add} />

        <button className="App__topLast" onClick={clear}>Сбросить</button>
      </div>
      <div>
        <Logs logs={logs} />
      </div>
    </div>
  );
}

export default App;
