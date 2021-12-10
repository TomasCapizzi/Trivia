import {useState} from 'react'

const useTriviaQuestions = () => {
    const [trivia, setTrivia] = useState([])
    const [listOfQuestions, setListOfQuestions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    
    async function getQuestions(url){

        const answer = await fetch(url);
        const ans = await answer.json();
        setTrivia(ans.results)
      }

    function changeQuestion(){
        setCurrentQuestion(currentQuestion + 1);
    }

    function totalQuestions(value){
        setListOfQuestions(value);
    }
    function reset(){
        setTrivia([]);
        setCurrentQuestion(0);
    }

    
    

    return {
        trivia,
        currentQuestion,
        getQuestions,
        changeQuestion,
        reset,
        listOfQuestions,
        totalQuestions
    }
}

export default useTriviaQuestions
