import { useDispatch, useSelector } from "react-redux";
import { performGetRandomJoke, performGetCategory } from "../store/jokes/slice";
import { selectCategories, selectJokes } from "../store/jokes/selectors";
import { useEffect, useState } from "react";
import Select from "react-select";

const NewJoke = () => {
  const dispatch = useDispatch();
  const jokeText = useSelector(selectJokes);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const options = jokeText.categories.map((joke, index) => {
    return { value: joke, label: joke, key: index };
  });
  useEffect(() => {
    dispatch(performGetRandomJoke());
    dispatch(performGetCategory());
  }, [dispatch]);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
  };
  //console.log(joke);
  return (
    <div class="col-md-5">
      <div class="h-100 p-5 bg-body-tertiary border rounded-3">
        <h2>Chuck Norris Joke</h2>
        <p>{jokeText.jokes.value}</p>
        <Select
          options={options}
          defaultValue={selectedCategory}
          onChange={handleCategoryChange}
        ></Select>
        <div className="d-flex justify-content-center pt-3">
          <button
            className="btn btn-outline-secondary "
            type="button"
            onClick={() => dispatch(performGetRandomJoke(selectedCategory))}
          >
            Get New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewJoke;
