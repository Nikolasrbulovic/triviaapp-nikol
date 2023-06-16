import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performGetRandomJoke } from "../store/jokes/slice";
import { selectJokes } from "../store/jokes/selectors";
const TriviaApp = () =>{
const dispatch = useDispatch();
const joke = useSelector(selectJokes);
console.log(joke);
 useEffect(()=>{
   dispatch(performGetRandomJoke())
 },[])
 return (
    <div>{joke.jokes.value}</div>
 )
}

export default TriviaApp;