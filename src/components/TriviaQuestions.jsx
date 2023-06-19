import { useDispatch, useSelector } from "react-redux";
import {
  performGetRandomTrivia,
  performGetTriviaCategory,
  performGetTriviaWithCategory,
} from "../store/jokes/slice";
import { useEffect, useState } from "react";
import Select from "react-select";
import { selectTrivia, selectTriviaCategories } from "../store/jokes/selectors";
import AnswerModal from "./AnswerModal";

const TriviaQuestions = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const trivia = useSelector(selectTrivia);
  const categories = useSelector(selectTriviaCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const options = categories.map((category, index) => {
    return { value: category.id, label: category.title, key: index };
  });
  console.log(showAnswer);
  useEffect(() => {
    dispatch(performGetRandomTrivia());
    dispatch(performGetTriviaCategory());
  }, [dispatch]);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };

  return (
    <div className="col-md-5">
      <div className="h-100 p-5 bg-body-tertiary border rounded-3">
        <h2 className="d-flex justify-content-center">Trivia Questions</h2>
        <p>{trivia[0]?.question}</p>
        <Select
          options={options}
          defaultValue={selectedCategory}
          onChange={handleCategoryChange}
        ></Select>
        <div className="d-flex justify-content-center pt-3">
          <button
            className="btn btn-outline-secondary "
            type="button"
            onClick={() => {
              if (selectedCategory) {
                dispatch(performGetTriviaWithCategory(selectedCategory));
              } else {
                dispatch(performGetRandomTrivia());
              }
            }}
          >
            Get New Question
          </button>
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
    </div>
  );
};

export default TriviaQuestions;
