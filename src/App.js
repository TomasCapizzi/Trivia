import './Styles/main.scss'

import React, {useState} from 'react';

import Login from './Pages/Login';
import Trivia from './Pages/Trivia';

function App() {

  const [isLog, setIsLog] = useState(false);
  const [actualUser, setActualUser] = useState('')

  return (
    <div className="App">
      {
        isLog ? 
        <Trivia actualUser={actualUser} setIsLog={setIsLog}/>
        :
        <Login setIsLog={setIsLog} setActualUser={setActualUser}/>
      }

    </div>
  );
}

export default App;
