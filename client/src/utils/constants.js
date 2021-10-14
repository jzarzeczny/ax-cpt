let API = "";
if (process.env.NODE_ENV === "development") {
  API = "http://localhost:5000";
} else if (process.env.NODE_ENV === "production") {
  API = "https://ax--cpt.herokuapp.com";
}

export const API_HOST = API;
