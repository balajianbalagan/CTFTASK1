const apiKey = "2cf5347b8f5403254901f331db8c6a07";
// Get your own "Current Weather Data" API key for free at https://openweathermap.org/api
const tempUnit = "metric";
const fetchData = async (country) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=${tempUnit}`
      );
      const data = await response.json().then((data)=>data);
      return data;
    };

export default fetchData;