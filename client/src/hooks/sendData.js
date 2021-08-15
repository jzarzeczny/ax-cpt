import axios from 'axios'

const sendResults = (nickname, path, data) => {
    data.forEach((e) => (e.nickname = nickname));
    axios
      .post("http://localhost:5000/" + path + nickname.nickname, data)
      .then((res) => console.log(res));
  };

export default sendResults