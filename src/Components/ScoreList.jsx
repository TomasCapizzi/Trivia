import React,{useState, useEffect} from "react";
import { database } from "../Firebase/users";

export default function ScoreList({actualUser}){

    const [scores, setScores] = useState([]);
    const [userScore, setUserScore] = useState([])
    const [handler, setHandler] = useState(false)

    async function getScoreList(){
        const scoreData = await database.collection('scores');
        scoreData.get().then((query)=> setScores(query.docs.map((doc)=>{
            return {...doc.data()}
        })))        
        setHandler(true);
        getUserScores()
    }

    function getUserScores(){
        setUserScore(scores.filter(item => item.user === actualUser))

    }

    useEffect(()=>{
        getScoreList();
        handler && console.log(scores.filter(item => item.user === actualUser));
                 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[handler])

    return(
        <div className='score-list'>
            <p>scores</p>
            { handler?
                userScore.map(
                    item => <p key={item.date}>{item.score}</p>
                )
                :
                <></>
            }
        </div>
    )
}