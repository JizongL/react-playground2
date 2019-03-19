import React from 'react';
import './App.css'
import Split from './composition/Split'
import Messages from './Messages'

function App() {
  return (
    < div className='App'>
    <h1>YOUR APPLICATION NAME!</h1>
      <Messages name='Messages' unread={0}/>
      <Messages name='Notification' unread={10}/>
    </div>
  )
}

export default App;

