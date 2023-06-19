import { useDispatch } from "react-redux";
import { performGetTriviaWithCategory,performGetRandomTrivia } from "../store/jokes/slice";
import { useSelector } from "react-redux";
import AnswerModal from "./AnswerModal";
const SingleQuestion = ({trivia, setShowAnswer, showAnswer}) => {
    const dispatch = useDispatch();
    
    return( 
    <div className="col-md-5">
    <div className="h-100 p-5 bg-body-tertiary border rounded-3">
      <h2 className="d-flex justify-content-center">Trivia Questions</h2>
      <p>{trivia?.question}</p>
   
      <div className="d-flex justify-content-center pt-3">
        
        <button
          className="btn btn-outline-secondary "
          type="button"
          onClick={() => setShowAnswer(true)}
        >
          Show Answer
        </button>
      </div>
    </div>
    <div>
      {showAnswer && (
        <AnswerModal
          trivia={trivia}
          setShowAnswer={setShowAnswer}
        ></AnswerModal>
      )}
    </div>
  </div>)
}
export default SingleQuestion;