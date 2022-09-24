
const useRestartGame = ({addScoreData, setHandler, resetScore, reset}) => {
    function restartGame(){
        addScoreData()
        setHandler(false);
        resetScore()
        reset();
      }
      function checkOut(){
        addScoreData(true)
        setHandler(false);
        reset();
        resetScore();
      }
  return {
    restartGame,
    checkOut
  }
}

export default useRestartGame