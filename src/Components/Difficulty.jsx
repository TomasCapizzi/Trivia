import React from 'react'

function Difficulty({modeRef}) {
  return (
    <select name="difficulty" ref={modeRef}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
  )
}

export default Difficulty