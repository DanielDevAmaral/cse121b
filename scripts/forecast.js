const key = "YuWFBTkMgAdQdCXbIY0DyOAvdNE55PMn";

const getWeather = async (id) => {
    const base = "https://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

const getCity = async (city) => {
    const base = "https://dataservice.accuweather.com/locations/v1/cities/search"; // Use HTTPS here
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity("aracaju")
    .then(data => {
        return getWeather(data.Key);
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
