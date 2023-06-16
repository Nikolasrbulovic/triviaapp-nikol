import { createSlice } from "@reduxjs/toolkit";
const middlewareActions = {
    performGetRandomJoke: ()=>{}
  };

   const jokesSlice = createSlice({
    name : 'jokes',
    initialState:{
        jokes :[]
    },
    reducers:{
      setRandomJoke: (state, action) =>{
          state.jokes = action.payload
      },
      ...middlewareActions

    }
  })

  export const {setRandomJoke,performGetRandomJoke}= jokesSlice.actions;

  export default jokesSlice.reducer;