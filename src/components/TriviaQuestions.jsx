import { useDispatch, useSelector } from "react-redux";
import {
  performGetRandomTrivia,
  performGetTriviaCategory,
  performGetTriviaWithCategory,
  setOffsetTrivia
} from "../store/jokes/slice";
import { useEffect, useState } from "react";
import Select from "react-select";
import { selectTrivia, selectTriviaCategories, selectOffset } from "../store/jokes/selectors";
import AnswerModal from "./AnswerModal";
import SingleQuestion from "./SingleQuestion";

const TriviaQuestions = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);
  const trivia = useSelector(selectTrivia);

  const [offset, setOffset] = useState(0);
  const categories = useSelector(selectTriviaCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const options = categories.map((category, index) => {
    return { value: category.id, label: category.title, key: index };
  });
  //console.log(showAnswer);
  useEffect(() => {
    dispatch(performGetRandomTrivia({offset: 0, value: ''}));
    dispatch(performGetTriviaCategory());
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };
  const pageChangeHandler = (payload) => {
    dispatch(setOffsetTrivia(payload));
    dispatch(performGetRandomTrivia(payload));
  }
  const setOffsetHandler = (payload) => {
    setOffset((prev) => {
      if (prev < 0) {
        return 0;
      } else {
        return prev + payload
      }

    })
  }

  return (
    <div>
      <Select
        options={options}
        defaultValue={selectedCategory}
        onChange={handleCategoryChange}
      ></Select>
      <button
        className="btn btn-outline-secondary pr-3 "
        type="button"
        onClick={() => {
          if (selectedCategory) {
            dispatch(performGetTriviaWithCategory(selectedCategory));
          } else {
            dispatch(performGetRandomTrivia());
          }
        }}
      >
        Get New Questions
      </button>
      <button disabled={offset === 0} className="btn btn-outline-secondary pr-3" onClick={() => { setOffsetHandler(10); pageChangeHandler(offset) }}>Next page</button>
      <button disabled={trivia.length <= 10} className="btn btn-outline-secondary pr-3" onClick={() => { setOffsetHandler(-10); pageChangeHandler(offset) }}>Previous page</button>
      {trivia.map((trivia) => {
        return <SingleQuestion trivia={trivia} setShowAnswer={setShowAnswer} showAnswer={showAnswer}></SingleQuestion>
      })}
    </div>


  );
};

export default TriviaQuestions;
