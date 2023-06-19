import { useDispatch } from "react-redux";
import { setSearchTrivia } from "../store/jokes/slice";
import { selectSearchValue } from "../store/jokes/selectors";
import { useSelector } from "react-redux";
import { performGetRandomTrivia } from "../store/jokes/slice";
import { useCallback, useEffect } from "react";
import debounce from 'lodash/debounce'

const SearchTrivia = () => {
    const searchValue = useSelector(selectSearchValue)
    const dispatch = useDispatch();
    const searchHandler = (e) => {
        dispatch(setSearchTrivia(e.target.value));
        debounceSearch(e.target.value)
    }

    const debounceSearch = useCallback(debounce((value) => {
        dispatch(performGetRandomTrivia({offset: 0, value}))
    }, 500), [])

    return (
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" onChange={(e) => searchHandler(e)} />
        </form>
    );
}
export default SearchTrivia;