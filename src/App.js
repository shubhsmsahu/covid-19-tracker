import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { countryData } from "./api/index";
import "./App.css";

// import { fetchData } from "./api/index";

function App() {
  const [global, setGlobal] = useState({});
  useEffect(() => {
    const url = "https://covid19.mathdro.id/api";
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((actualdata) => {
        // console.log(actualdata);
        setGlobal(actualdata);
        // console.log(global);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleCountryData = async (country) => {
    setGlobal(await countryData(country));
  };
  return (
    <div className="container">
      <Cards global={global} />
      <CountryPicker handleCountryData={handleCountryData} />
      <Chart />
    </div>
  );
}

export default App;
