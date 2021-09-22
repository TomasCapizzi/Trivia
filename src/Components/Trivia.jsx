import React,{useState, useEffect} from "react";
import Question from "./Question";
import {FaPlay} from "react-icons/fa";
import {HiRefresh} from 'react-icons/hi'


export default function Trivia(){


  //  const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

   // const [url, setUrl] = useState('')

    const [trivia, setTrivia] = useState([])
    const [listOfQuestions, setListOfQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0);
    const [handler, setHandler] = useState(false)
    
    async function getQuestions(url){

        const answer = await fetch(url);
        const ans = await answer.json();
        setTrivia(ans.results)
      } 
    
    function startGame(){

      const mode = document.getElementById('difficulty');
      const category = document.getElementById('category');
      const total = document.getElementById('total')
      setListOfQuestions(total.value);

      console.log(mode.value, category.value, total.value);
      let url = `https://opentdb.com/api.php?amount=${total.value}&category=${category.value}&difficulty=${mode.value}&type=multiple`

      getQuestions(url);
      setHandler(true)
    }
    
      function changeQuestion(e){
          setCurrentQuestion(currentQuestion + 1);      
    }


    function restarGame(){
      setHandler(false);
      setCurrentQuestion(0);
      setScore(0);
      setTrivia([])
    }
      useEffect(()=>{
        
      },[])
    


    return(
        <div className='trivia-container'>
          {
            !handler ? 
          <div className='start-screen'>

            <div className='menu'>

              <select name="category" id="category">
                <option value="">Choose a category</option>
                <option value="21">Sports</option>
                <option value="11">Film</option>
                <option value="23">History</option>
                <option value="12">Music</option>
                <option value="22">Geography</option>
                <option value="25">Art</option>
                <option value="17">Science and Nature</option>
              </select>

              <select name="difficulty" id="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>

              <select name="total" id="total">
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
              </select>

              <FaPlay onClick={startGame} />
              </div>
              <h3>Quiz!</h3>
            </div>
            :

          <div className='question-container'>
            {
              currentQuestion < listOfQuestions ?
              <div className='question'>   
              {
                trivia.length ? 
                <Question question={trivia[currentQuestion]} changeQuestion={changeQuestion}  setScore={setScore} score={score}  listOfQuestions={listOfQuestions}/>
                 : <div class="spinner">
                 <div class="double-bounce1"></div>
                 <div class="double-bounce2"></div>
               </div>
              }
              </div>
              : <div className='score-screen'>
                <h3>Your final score is: </h3>
                <p>{score}</p>
                <HiRefresh onClick={restarGame}/>
              </div>
            }
          </div>
          }
        </div>
    )
}