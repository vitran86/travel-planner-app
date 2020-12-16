console.log(`hello Vi`);

// Require dotenv for API keys process
const dotenv = require("dotenv");
dotenv.config();
/* console.log(`Your WEATHERBIT API key is ${process.env.WEATHERBIT_KEY}`);
console.log(`Your GEO API key is ${process.env.USER_NAME_GEO}`);
console.log(`Your PIXABAY API key is ${process.env.PIXABAY_KEY}`);
console.log(`Your AVIATION API key is ${process.env.AVIATION_KEY}`); */

// require funtions call to APIs
const {
  getGeoData,
  getWeather,
  getPicture,
  getCountryInfo,
  getCovidInfo,
  getFlightInfo,
  getAirportCodeByCity,
} = require("./server-API");

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
  res.send(consolidatedData);
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
  console.log(airportCodeByArrCity);
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
    console.log(req.body);
  } catch (error) {
    console.log("error", error);
    res.send("error", error);
  }
});
