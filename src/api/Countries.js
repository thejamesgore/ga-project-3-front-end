// import request from "./request.js";
import axios from "axios";

// export const getAllCountries = async () => {
//   const options = { method: "GET", url: `/api/countries` };

//   const { data } = await request(options);
//   console.log(`THIS IS THE DATA >>>>>>`,data)
//   return data;
// };

export const getAllCountries = async () => {
  const data = await axios.get(`http://localhost:8001/api/countries`);
  console.log("this is data returning from the API", data);

  return data;
};
