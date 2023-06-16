import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export const ChuckService = {
    getRandomJoke: async ()=>{
        const data = await API.get("jokes/random")
        return data;
    }
}