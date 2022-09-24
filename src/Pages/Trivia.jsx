import React,{useRef, useState} from "react";

import Category from "../Components/Category";
import Difficulty from "../Components/Difficulty";
import {FaPlay} from "react-icons/fa";
import NumberOfQuestions from "../Components/NumberOfQuestions";
import Question from "../Components/Question";
import Score from "./Score";
import Spinner from "../Components/Spinner";
import { database } from "../Firebase/users";
import useRestartGame from "../Hooks/useRestartGame";
import useScore from "../Hooks/useScore";
import useStartGame from "../Hooks/useStartGame";
import useTriviaQuestions from "../Hooks/useTriviaQuestions";

export default function Trivia({actualUser, setIsLog}){

    const {trivia,currentQuestion, getQuestions, changeQuestion, reset, listOfQuestions, totalQuestions} = useTriviaQuestions();
    const {score, incrementScore, resetScore} = useScore();
    const [handler, setHandler] = useState(false)


    const modeRef = useRef();
    const categoryRef = useRef();
    const totalRef = useRef();

    const {startGame} = useStartGame({modeRef, categoryRef, totalRef, totalQuestions, getQuestions, setHandler})
    const {restartGame, checkOut} = useRestartGame({addScoreData, setHandler, resetScore, reset});

    async function addScoreData(log){
      const scoreData = await database.collection('scores');
      const scoreItem = {
        score: score,
        user: actualUser,
        mode: modeRef.current.value,
        date: new Date()
      }
      scoreData.add(scoreItem);
      log && setIsLog(false) 
    }
    return(
        <div className='trivia-container'>
          {
            !handler ? 
          <div className='start-screen'>
            <div className='menu'>
              <Category categoryRef={categoryRef} />
              <Difficulty modeRef={modeRef} />
              <NumberOfQuestions totalRef={totalRef} />
              <FaPlay onClick={startGame} />
            </div>
            <h3>Quiz<span>!</span></h3>
            <p>Good luck <span>{actualUser}</span></p>
          </div>
          :
          <div className='question-container'>
            {
              currentQuestion < listOfQuestions ?
                <div className='question'>   
                  {
                    trivia.length ? 
                    <Question question={trivia[currentQuestion]} changeQuestion={changeQuestion}  incrementScore={incrementScore} score={score}  listOfQuestions={listOfQuestions}/>
                    : <Spinner/>
                  }
                </div>
              : <Score checkOut={checkOut} actualUser={actualUser} score={score} restartGame={restartGame}  />
            }
          </div>
          }
        </div>
    )
}