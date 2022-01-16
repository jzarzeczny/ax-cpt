import axios from "axios";
import { API_HOST } from "./constants";

const sendResults = (nickname, path, data) => {
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post(API_HOST + "/" + path + "/" + nickname, data)
    .then((res) => res.json())
    .then((data) => console.log(data.message))
    .catch((err) => console.log(err));
};

export default sendResults;
