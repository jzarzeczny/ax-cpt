let API = "";
if (process.env.NODE_ENV === "development") {
  API = "http://localhost:20668";
} else if (process.env.NODE_ENV === "production") {
  API = "http://axcpt.toadres.pl";
}

export const API_HOST = API;
