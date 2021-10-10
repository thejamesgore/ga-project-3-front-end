import React from "react";

const CountriesCard = ({ _id, name, city, yearVisited, comments }) => {
  console.log(_id, name, city, yearVisited, comments);

  return (
    <div className="country-card-container">
      <div>
        <h2>CREATED BY @USERNAME</h2>
      </div>
      <div>
        <h3>Country: {name}</h3>
      </div>
      <div>
        <p>Cities Visited: {city}</p>
      </div>
      <div>
        <p>Year Visted: {yearVisited}</p>
      </div>
      <div>
        <p>Comments: {comments}</p>
      </div>
    </div>
  );
};

export default CountriesCard;

// export default function Country() {
//     return (
//         <section>
//         <div className="countries-card">
//             <h2>Country: </h2>
//             <h3>City: </h3>
//             <h3>Year Visited: </h3>
//             <h3>Comments: </h3>
//             <h3>Rating: </h3>
//         </div>
//         </section>
//     )
// }
