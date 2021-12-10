import React from "react";
import Results from './Results';


export default function Question({question , changeQuestion, incrementScore, score, listOfQuestions}){

    return(
        <>
            <h3 dangerouslySetInnerHTML={{__html: question.question}}/>
            <Results correct={question.correct_answer} incorrect={question.incorrect_answers} changeQuestion={changeQuestion}  incrementScore={incrementScore} score={score} listOfQuestions={listOfQuestions}/>
        </>
    )
}