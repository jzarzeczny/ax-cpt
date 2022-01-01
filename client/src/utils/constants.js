let API = "";
if (process.env.NODE_ENV === "development") {
  API = "http://localhost:5001";
} else if (process.env.NODE_ENV === "production") {
  API = "http://axcpt.toadres.pl/api";
}

export const API_HOST = API;
