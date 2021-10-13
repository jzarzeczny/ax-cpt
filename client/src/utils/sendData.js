import axios from "axios";

const sendResults = async (nickname, path, data) => {
  console.log("Sending ");
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post("http://localhost:5000/" + path + nickname.nickname, data)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default sendResults;
