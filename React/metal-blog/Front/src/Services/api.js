import axios from "axios";

// const api = axios.create({ baseURL: process.env.REACT_APP_BASEURL });
const api = axios.create({ baseURL: "http://localhost:3333/" });

export { api };