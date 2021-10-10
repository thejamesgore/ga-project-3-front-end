
import axios from "axios";

// All methods for interacting with the api

export const getAllCountries = async () => {
  const data = await axios.get(`http://localhost:8001/api/countries`);
  console.log("this is data returning from the API", data);

  return data;
};
