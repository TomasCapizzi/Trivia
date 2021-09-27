import React, {useState} from 'react';
import Login from './Components/Login';
import Trivia from './Components/Trivia';
import './Styles/main.scss'


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
