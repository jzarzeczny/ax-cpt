import axios from "axios";
import { API_HOST } from "./constants";

const sendResults = async (nickname, path, data) => {
  console.log("Sending ");
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post(API_HOST + "/" + path + nickname.nickname, data)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default sendResults;
