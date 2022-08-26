import React from "react";

interface Country {
    name: string;
    code: string;
    currency: string;
    continent: string;
    languages: string;
    capital: string;
  }


export default function DetailCountry({name, code, currency, continent, languages, capital}: Country) {
  return (
    <div className="Countries">
      <div
        className="card text-white bg-primary mb-3"
        style={{ maxWidth: "20rem" }}
      >
        <div className="card-header">Detail information</div>
        <div className="card-body">
          <p className="card-text">Code: {code}</p>
          <p className="card-text">Name: {name}</p>
          <p className="card-text">Currency: {currency}</p>
          <p className="card-text">Continent: {continent}</p>
          <p className="card-text">Languages: {languages}</p>
          <p className="card-text">Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
}
