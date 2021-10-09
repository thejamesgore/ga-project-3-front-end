import axios from "axios";

const request = (options) => {
  const url =
    process.env.NODE.ENV === "production"
      ? `http://localhost:8001/`
      : options.url;

  const requestOptions = { options, url };

  return axios.request(requestOptions);
};

export default request;
