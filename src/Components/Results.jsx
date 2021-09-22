import React, {useState,useEffect} from "react";

export default function Results({correct, incorrect, changeQuestion, setScore , score}){

    const [results, setResults] = useState([])


    function compareResult(res){
        console.log(res)
        if(res === correct){
            setScore(score + 1)
        } else{
            console.log('Incorrect')
        }

    }

    useEffect(()=>{
        setResults([correct, incorrect[0], incorrect[1], incorrect[2]])
    },[correct, incorrect])


    return(
        <div className='question-options'>
            {
                results.length ? 
                results.sort(item => Math.random()-0.5).map(res => <button onClick={(e)=> {
                    changeQuestion(e)
                    compareResult(e.target.innerText)
                }} key={res} >{res}</button>)
                : <></>
            }
        </div>
    )
}
