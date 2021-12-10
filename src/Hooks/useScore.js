import {useState} from 'react'

const useScore = () => {
    const [score, setScore] = useState(0);

    function incrementScore(){
        setScore(score+1);
    }

    function resetScore(){
        setScore(0);
    }



    return {
        score,
        incrementScore,
        resetScore
    }
}

export default useScore
