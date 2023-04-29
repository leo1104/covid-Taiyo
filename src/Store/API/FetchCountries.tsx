import axios from "axios";

async function FetchCountries() {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
}

export default FetchCountries;
