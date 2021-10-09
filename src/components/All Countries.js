import React, { useState, useEffect } from "react";
import { getAllCountries } from "../api/Countries";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then((countries) => setCountries(countries));
  }, []);

  return (
    <div>
      <h1>COUNTRIES</h1>
      <div>
        {countries.map((Country) => (
          <Country key={country._id} {...country} />
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
