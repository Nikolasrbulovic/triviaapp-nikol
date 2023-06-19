import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export const APItrivia = axios.create({
  baseURL: "http://jservice.io/",
});
