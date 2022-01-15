import axios from "axios";
import { API_HOST } from "./constants";

const sendResults = (nickname, path, data) => {
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post(API_HOST + "/" + path + nickname, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default sendResults;
