console.log(`hello Vi`);

// Require dotenv for API keys process
const dotenv = require("dotenv");
dotenv.config();
/* console.log(`Your WEATHERBIT API key is ${process.env.WEATHERBIT_KEY}`);
console.log(`Your GEO API key is ${process.env.USER_NAME_GEO}`);
console.log(`Your PIXABAY API key is ${process.env.PIXABAY_KEY}`);
console.log(`Your AVIATION API key is ${process.env.AVIATION_KEY}`); */

// Require Express to run server and routes
const path = require("path");
const express = require("express");

// Require Node-fetch to run server
const fetch = require("node-fetch");

// Require moment to convert date & time
const moment = require("moment");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));
console.log(__dirname);

// Setup Server
const port = process.env.PORT || 8000;
const server = app.listen(port, listening);

function listening() {
  console.log(`This app is running on localhost:${port}`);
}

// Set up Routers

// GET route:

app.get("/allData", async (req, res) => {
  res.send(projectData);
});

// POST route:

app.post("/addTrip", async (req, res) => {
  // fetch data from baseURL for the request

  let depCity = req.body.depCity;
  let arrCity = req.body.arrCity;

  /*consolidatedData =[
    {geoArrData,geoDepData},
    {weatherData},
    {picture},
    {countryInfo},
    {covid19},
    {departureCode,arrivalCode},
    {airportCodeByArrCity,airportCodeByDepCity},
    {flightInfo}] */

  const consolidatedData = [];

  const geoArrData = await getGeoData(arrCity);
  const geoDepData = await getGeoData(depCity);
  consolidatedData.push({
    arrCityName: geoArrData.cityName,
    arrCountryName: geoArrData.countryName,
    arrCountryCode: geoArrData.countryCode,
    depCityName: geoDepData.cityName,
    depCountryName: geoDepData.countryName,
    depCountryCode: geoDepData.countryCode,
  });

  const weatherData = await getWeather(geoArrData.lat, geoArrData.lng);
  consolidatedData.push(weatherData);

  const picture = await getPicture(geoArrData.cityName);
  consolidatedData.push({ pic: picture });

  const countryInfo = await getCountryInfo(geoArrData.countryCode);
  consolidatedData.push({ countryInfo });

  const covid19 = await getCovidInfo(geoArrData.countryCode);
  consolidatedData.push({ covid19 });

  const airportCodeByArrCity = await getAirportCodeByCity(geoArrData.cityName);
  const airportCodeByDepCity = await getAirportCodeByCity(geoDepData.cityName);
  consolidatedData.push({
    airportCodeByArrCity,
    airportCodeByDepCity,
  });

  /* const flightInfo = await getFlightInfo(airportCodeByArrCity.code);
  consolidatedData.push(flightInfo); */

  const flightInfo = [];
  consolidatedData.push(flightInfo);

  res.send(consolidatedData);

  try {
    /* console.log(consolidatedData); */
    console.log(req.body);
  } catch (error) {
    console.log("error", error);
  }
});

async function getGeoData(city) {
  const geoURL = "http://api.geonames.org/searchJSON?";

  const response1 = await fetch(
    `${geoURL}q=${city}&maxRows=1&username=${process.env.USER_NAME_GEO}`,
    {}
  );
  if (response1.status === 200) {
    const data = await response1.json();

    const geo = {
      lat: data.geonames[0].lat,
      lng: data.geonames[0].lng,
      cityName: data.geonames[0].toponymName,
      countryName: data.geonames[0].countryName,
      countryCode: data.geonames[0].countryCode,
    };
    return geo;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getWeather(lat, lon) {
  const weatherbitURL = "http://api.weatherbit.io/v2.0/forecast/daily?";

  const response2 = await fetch(
    `${weatherbitURL}&lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_KEY}`,
    {}
  );

  const weatherForecast = [];

  if (response2.status === 200) {
    const weatherData = await response2.json();
    weatherData.data.forEach((objectData) => {
      weatherForecast.push({
        forecastDate: objectData.valid_date,
        maxTemp: objectData.max_temp,
        minTemp: objectData.min_temp,
        description: objectData.weather.description,
        icon: objectData.weather.icon,
      });
    });

    return weatherForecast;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getPicture(cityName) {
  const pixabayURL = "https://pixabay.com/api/?";

  const response3 = await fetch(
    `${pixabayURL}&q=${encodeURI(
      cityName
    )}&image_type=photo&orientation=vertical&safesearch=true&key=${
      process.env.PIXABAY_KEY
    }`,
    {}
  );
  if (response3.status === 200) {
    const data = await response3.json();
    const picture = data.hits[0].webformatURL;
    return picture;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getCountryInfo(countryCode) {
  const restCountryURL = "https://restcountries.eu/rest/v2/alpha/";

  const response4 = await fetch(`${restCountryURL}${countryCode}`, {});

  const arrCountryInfo = [];
  if (response4.status === 200) {
    const data = await response4.json();

    arrCountryInfo.push({
      area: data.area,
      capital: data.capital,
      population: data.population,
      currencyCode: data.currencies[0].code,
      currencyName: data.currencies[0].name,
      languageName: data.languages[0].name,
    });

    return arrCountryInfo;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getCovidInfo(countryCode) {
  const covid19URL = "https://covid19-api.org/api/status/";

  const response5 = await fetch(`${covid19URL}${countryCode}`, {});
  if (response5.status === 200) {
    const data = await response5.json();
    return data;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getFlightInfo(airportCode) {
  const fightURL =
    "http://api.aviationstack.com/v1/flights?flight_status=scheduled";

  const response6 = await fetch(
    `${fightURL}&arr_iata=${airportCode}&access_key=${process.env.AVIATION_KEY}`,
    {}
  );
  if (response6.status === 200) {
    const data = await response6.json();
    const flightData = [];

    data.data.forEach((objectData) => {
      flightData.push({
        depIATA: objectData.departure.iata,
        depAirport: objectData.departure.airport,
        airline: objectData.airline.name,
        flight: objectData.flight.iata,
        scheduledTime: new Date(
          objectData.departure.scheduled
        ).toLocaleTimeString(),
      });
    });
    console.log(data);
    console.log(flightData);
    return flightData;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}

async function getAirportCodeByCity(arrCityName) {
  const airlabURL = "http://airlabs.co/api/v6/autocomplete?";

  const response = await fetch(
    `${airlabURL}query=${encodeURI(arrCityName)}&api_key=${
      process.env.AIRLAB_KEY
    }`,
    {}
  );
  if (response.status === 200) {
    const data = await response.json();

    const airportCodeByCity = data.response.airports_by_cities[0];
    return airportCodeByCity;
  } else {
    throw new Error(`Unable to fetch data`);
  }
}
