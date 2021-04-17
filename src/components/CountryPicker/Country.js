import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
const Country = ({ handleCountryData }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesData = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountriesData();
  }, [setFetchedCountries]);
  return (
    <FormControl>
      <NativeSelect onChange={(e) => handleCountryData(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
