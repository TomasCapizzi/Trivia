import { database } from "../Firebase/users";

const useGetScores = ({setScores, setHandler, getUserScores}) => {

    async function getScoreList(){
        const scoreData = await database.collection('scores');
        scoreData.get().then((query)=> setScores(query.docs.map((doc)=>{
            return {...doc.data()}
        })))        
        setHandler(true);
        getUserScores()
    }
  return {
    getScoreList,
  }
}

export default useGetScores