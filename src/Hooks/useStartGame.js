
const useStartGame = ({modeRef, categoryRef, totalRef, totalQuestions, getQuestions, setHandler}) => {

    function startGame(){
        const mode = modeRef.current.value;
        const category = categoryRef.current.value;
        const total = totalRef.current.value;
        totalQuestions(total);
        let url = `https://opentdb.com/api.php?amount=${total}&category=${category}&difficulty=${mode}&type=multiple`
        getQuestions(url);
        setHandler(true)
      }
  return {
    startGame,
  }
}

export default useStartGame