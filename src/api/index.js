import axios from "axios";

const urlDateData = `https://covid19.mathdro.id/api/daily`;

export const fetchData = async () => {
  try {
    const { data } = await axios.get(urlDateData);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get("https://covid19.mathdro.id/api/countries");

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const countryData = async (country) => {
  try {
    const { data } = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
