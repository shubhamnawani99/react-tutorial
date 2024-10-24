// End extension as .js since this returns javascripts only

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // This will be updated in this function and returned
  const [data, setData] = useState({});
  // hook returns some data
  // we will call an API, when hook is loaded
  useEffect(() => {
    // Fetch call
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    // Fetch gives you a callback (method)
    fetch(url)
      // Convert to JSON
      .then((response) => response.json())
      // Store data from API into data
      .then((response) => setData(response[currency]));
    console.log(data);
    // The second half of useEffect takes in dependencies,
    // We want to setData whenever the currency is changed
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
