import axios from "axios";

const sendResults = async (nickname, path, data) => {
  const port = process.env.PORT || 5000;

  console.log("Sending ");
  data.forEach((e) => (e.nickname = nickname));
  axios
    .post("http://localhost:" + port + "/" + path + nickname.nickname, data)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default sendResults;
