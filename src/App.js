// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString()

  let [ctime, setTime] = useState(time)
  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(updateTime)
  return <>
    <div>
      <h2>Digital Clock</h2>
      <h1>
      {ctime}
      </h1>
    </div>
  </>
}

export default App;
