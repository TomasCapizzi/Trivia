import React,{useEffect, useState} from "react";

import useGetScores from "../Hooks/useGetScores";

export default function ScoreList({actualUser}){

    const [scores, setScores] = useState([]);
    const [userScore, setUserScore] = useState([])
    const [handler, setHandler] = useState(false)

    const {getScoreList} = useGetScores({setScores, setHandler, getUserScores})

    function getUserScores(){
        setUserScore(scores.filter(item => item.user === actualUser))
        console.log(scores.filter(item => item.user === actualUser));
    }

    useEffect(()=>{
        getScoreList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[handler])

    return(
        <div className='score-list'>
            <p>Scores</p>
            { userScore.length ?
                userScore.map(
                    item => <p key={item.date}>{item.score}</p>
                )
                :
                null
            }
        </div>
    )
}