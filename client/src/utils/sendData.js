import axios from "axios";
import { API_HOST } from "./constants";

const sendResults = async (nickname, path, data) => {
  data.forEach((e) => (e.nickname = nickname));
  await axios
    .post(API_HOST + "/" + path + nickname.nickname, data)
    .catch((e) => console.log(e));
};

export default sendResults;
