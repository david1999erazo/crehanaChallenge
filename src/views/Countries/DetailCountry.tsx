import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartDetailCountry from "../../components/Cart/CartDetailCountry/CartDetailCountry";
import { useQuery } from "@apollo/client";
import GET_COUNTRY from "../../api/CountryService";

import { Button } from "antd";

export default function DetailCountry() {
  const navigate = useNavigate();
  const location = useLocation();
  const countryCode = location.pathname.substring(1);

  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const resCountry = data.country;

  const country = {
    name: resCountry.name,
    code: resCountry.code,
    currency: resCountry.currency,
    continent: resCountry.continent.name,
    languages: resCountry.languages[0].name,
    capital: resCountry.capital,
  };

  const goToCountries = () => {
    navigate("/");
  };
  return (
    <div className="DetailCountry">
      <CartDetailCountry {...country}></CartDetailCountry>
      <Button onClick={() => goToCountries()}> Return to countries</Button>
    </div>
  );
}
