import axios from "axios";
import { API_HOST } from "./constants";

const sendResults = async (nickname, path, data) => {
  data.forEach((e) => (e.nickname = nickname));
  await axios
    .post(API_HOST + "/" + path + nickname.nickname, data)
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};

export default sendResults;
