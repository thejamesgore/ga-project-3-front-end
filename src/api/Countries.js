import request from "./request.js";

export const getAllCountries = async () => {
  const options = { method: "GET", url: `/api/countries` };

  const { data } = await request(options);
  return data;
};
