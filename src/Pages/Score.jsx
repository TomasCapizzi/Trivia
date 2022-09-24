import {BiLogOut} from 'react-icons/bi';
import {HiRefresh} from 'react-icons/hi';
import React from 'react';
import ScoreList from '../Components/ScoreList';

function Score({checkOut, actualUser, score, restarGame}) {
  return (
    <div className='score-screen'>
        <BiLogOut className='check-out' onClick={checkOut}/>
        <h3>{actualUser.toUpperCase()} your final score is: </h3>
        <p>{score}</p>
        <HiRefresh onClick={restarGame}/>
        <ScoreList actualUser={actualUser}/>
    </div>
  )
}

export default Score