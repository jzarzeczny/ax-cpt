let API = "";
if (process.env.NODE_ENV === "development") {
  API = "http://localhost:5001";
} else if (process.env.NODE_ENV === "production") {
  API = "http://localhost:5001";
}

export const API_HOST = API;
