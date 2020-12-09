import { v4 as uuidv4 } from "uuid";

// Create a new date instance dynamically with JS
function takeDate(input) {
  let newDate = "";
  let d = new Date(input);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (newDate = `${months[d.getMonth()]} ${
    d.getDate() + 1
  }, ${d.getFullYear()}`);
}

// create template for each trip
function getTripTemplate(trip) {
  return `<div class="hero-box">
      <div class="container">
        <div id="location">
          <span id="city">Trip to: ${trip.arrCityName}</span> , <span id="countryName"></span>
          <div id="start-date"></div>
          <div id="end-date"></div>
        </div>
        <div class="country-card">
          <img id="city-pic"/>
          <button type="button" class="country-info-btn">
            Country Info
          </button>
  
          <div class="country-info">
            <p>
              <span class="country-name1"></span>, a country which has
              <span class="area"></span> million square kilometers (km²)
              land area with population of
              <span class="population"></span> million people. Their capital
              is <span class="capital"></span>. Main language here is
              <span class="language"></span>. Currency is
              <span class="currency-code"></span>(<span
                class="currency-name"
              ></span
              >).
            </p>
          </div>
          <button type="button" class="covid-info-btn">
            Covid-19 Info
          </button>
          <div class="covid19-info">
            <p>
              <span class="country-name2"></span> is a country has
              <span class="covid-level"></span> level of COVID-19.(Currently
              active case is <span class="active-case"></span>. Last updated
              is at <span class="last-update"></span>). Get more specific
              Infomation
              <a href="https://www.google.com/">here</a>
              <!-- "https://travel.state.gov/content/travel/en/traveladvisories/COVID-19-Country-Specific-Information.html" -->
            </p>
          </div>
          <button type="button" class="count-down-btn">
            Trip count down
          </button>
          <div class="day-count">
            <p>
              Trip to <span id="tripName"></span> is
              <span id="calc-day"></span> days away.
            </p>
          </div>
          <button type="submit" id="weather-detail">
            Get weather Forecast
          </button>
          <br />
          <div class="weather-forecast">
            <h3>Weather forecast in next 16 days</h3>
            <ul id="weather"></ul>
          </div>
          <button type="submit" class="get-flight-btn">Flight Info</button>
          <div class="flight-info">
            <h3>Direct flight info</h3>
            <p>(auto detected by nearest airport)</p>
            <div class="departure-info">
              <div>
                From <span class="departure-airport-code">SGN</span>(
                <span class="departure-airport-name">TSN AIRPORT</span>)
              </div>
              <div class="departure-country"></div>
            </div>
            <div class="arrival-info">
              <div>
                To <span class="arrival-airport-code">NRT</span>(
                <span class="arrival-airport-name">NARITA AIRPORT</span>)
              </div>
              <div class="arrival-country"></div>
            </div>
  
            <ul id="flight">
              <li class="flight-detail">
                <div class="airline"></div>
                <div class="flight-number"></div>
                <div class="scheduled-time"></div>
              </li>
              <div class="cant-get-flight"></div>
            </ul>
          </div>
        </div>
  
        <div>
          <button type="submit" id="add-note">Add Note</button>
          <br />
          <div class="note">
            <textarea
              id="note"
              rows="10"
              cols="50"
              placeholder="Add note here..."
            ></textarea>
          </div>
        </div>
        <div class="end-card-btn">
          <button type="submit" id="save-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z" />
            </svg>
            Save trip
          </button>
          <button type="submit" id="delete-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M0 10h24v4h-24z" />
            </svg>
            Remove trip
          </button>
        </div>
      </div>
    </div>`;
}
// create function to convert temperature from K to F
function convertToFahrenheit(tempC) {
  const tempF = tempC * 1.8 + 32;
  return `${Math.round(tempF)} °F`;
}

// create function to generate weather forecast for the trip (structure looks like below) dynamically
/* 
  <div class="weather-forecast">
    <h3>Weather forecast in next 16 days</h3>
    <ul id="weather">
      <li class=weather-items>
        <div class="forecast-date">Dec 24,2020</div>
        <img class="forecast-icon" src="/static/weather-icon-png/a01d.png" width="50" height="50">
        <div class="forecast-minTemp">L: 7 C</div>
        <div class="forecast-maxTemp">H: 17 C</div>
        <div class="forecart-description">broken cloudy</div>
      </li>
    </ul>
  </div>
   */

function generateWeatherForecast(data) {
  const newForecast = document.createElement("li");
  newForecast.classList.add("weather-items");

  //forecast date
  const forecastDate = document.createElement("div");
  forecastDate.classList.add("forecast-date");
  forecastDate.innerHTML = takeDate(data.forecastDate);
  newForecast.appendChild(forecastDate);

  // weather icon
  const weatherIcon = document.createElement("img");
  const icon = data.icon;
  const iconURL = require(`../images/weather-icon-png/${icon}.png`);
  weatherIcon.setAttribute("src", `${iconURL}`);
  weatherIcon.setAttribute("class", "forecast-icon");
  newForecast.appendChild(weatherIcon);

  //temp min
  const tempMin = document.createElement("div");
  tempMin.classList.add("forecast-minTemp");
  tempMin.innerHTML = `L: ${convertToFahrenheit(data.minTemp)}`;
  newForecast.appendChild(tempMin);

  //temp max
  const tempMax = document.createElement("div");
  tempMax.classList.add("forecast-maxTemp");
  tempMax.innerHTML = `H: ${convertToFahrenheit(data.maxTemp)}`;
  newForecast.appendChild(tempMax);

  //description
  const description = document.createElement("div");
  description.classList.add("forecart-description");
  description.innerHTML = data.description;
  newForecast.appendChild(description);

  return newForecast;
}

// create functions to get related data to arrival country (including : basic info, covid & flight)
function getCountryInfo(data) {
  const areaArrCountry = document.querySelector(".area");
  areaArrCountry.innerHTML = (data.countryInfo[0].area / 100000).toFixed(2);

  const populationArrCountry = document.querySelector(".population");
  populationArrCountry.innerHTML = (
    data.countryInfo[0].population / 1000000
  ).toFixed(2);

  const capitalArrCountry = document.querySelector(".capital");
  capitalArrCountry.innerHTML = data.countryInfo[0].capital;

  const languageArrCountry = document.querySelector(".language");
  languageArrCountry.innerHTML = data.countryInfo[0].languageName;

  const currencyCodeArrCountry = document.querySelector(".currency-code");
  currencyCodeArrCountry.innerHTML = data.countryInfo[0].currencyCode;

  const currencyNameArrCountry = document.querySelector(".currency-name");
  currencyNameArrCountry.innerHTML = data.countryInfo[0].currencyName;
}

function getCovidInfo(data) {
  const covidCase = document.querySelector(".active-case");
  covidCase.innerHTML = data.covid19.cases.toFixed(0);

  const lastUpdate = document.querySelector(".last-update");
  lastUpdate.innerHTML = new Date(
    data.covid19.last_update
  ).toLocaleDateString();
}

function analysingCovidData(covidData, population) {
  const rate = ((covidData / population) * 100).toFixed(2);
  console.log(rate);
  let level = "";

  if (rate >= 3) {
    level = "extremely high";
  } else if (rate >= 1) {
    level = "high";
  } else {
    level = "low";
  }

  return level;
}

function getAirportInfo(data) {
  const depAirportCode = document.querySelector(".departure-airport-code");
  depAirportCode.innerHTML = data.airportCodeByDepCity.code;
  const depAirportName = document.querySelector(".departure-airport-name");
  depAirportName.innerHTML = data.airportCodeByDepCity.name;
  const depCountry = document.querySelector(".departure-country");
  depCountry.innerHTML = data.airportCodeByDepCity.country_name;

  const arrAirportCode = document.querySelector(".arrival-airport-code");
  arrAirportCode.innerHTML = data.airportCodeByArrCity.code;
  const arrAirportName = document.querySelector(".arrival-airport-name");
  arrAirportName.innerHTML = data.airportCodeByArrCity.name;
  const arrCountry = document.querySelector(".arrival-country");
  arrCountry.innerHTML = data.airportCodeByArrCity.country_name;
}

function getFightInfo(depAirportCode, flights) {
  const flightsFiltered = flights.filter((flight) => {
    const depAirportIATA = flight.depIATA;
    return depAirportCode === depAirportIATA;
  });
  console.log(flightsFiltered.length);
  if (flightsFiltered.length > 0) {
    flightsFiltered.forEach((filteredFlight) => {
      const flight = document.querySelector("#flight");
      const flightDetail = displayFlightInfo(filteredFlight);
      flight.append(flightDetail);
    });
  } else if (flightsFiltered.length === 0) {
    const resultMsg = document.querySelector(".cant-get-flight");
    resultMsg.innerHTML =
      " Can't find any direct flight from these airports right now, please try again later!";
    return resultMsg;
  }
}

function displayFlightInfo(data) {
  const newFlight = document.createElement("li");
  newFlight.classList.add("flight-detail");

  const airline = document.createElement("div");
  airline.classList.add("airline");
  airline.innerHTML = data.airline;
  newFlight.appendChild(airline);

  const flightNumber = document.createElement("div");
  flightNumber.classList.add("flight-number");
  flightNumber.innerHTML = `Flight ${data.flight}`;
  newFlight.appendChild(flightNumber);

  const scheduledTime = document.createElement("div");
  scheduledTime.classList.add("scheduled-time");
  scheduledTime.innerHTML = `Scheduled: ${data.scheduledTime}`;
  newFlight.appendChild(scheduledTime);

  return newFlight;
}

// get data from big Data trips
const getSavedTrips = () => {
  const tripsJSON = localStorage.getItem("trips");
  if (tripsJSON !== null) {
    return JSON.parse(tripsJSON);
  } else {
    return [];
  }
};

// save trip to big Data Trips
const saveTrip = (trip) => {
  const trips = getSavedTrips();
  const id = uuidv4();
  trips.push({
    id,
    trip,
  });

  console.log(trips);
  localStorage.setItem("trips", JSON.stringify(trips));
};

/// Remove a trip from the list
const removeTrip = (tripId) => {
  const trips = getSavedTrips();
  const tripIndex = trips.findIndex(function (trip) {
    return trip.id === tripId;
  });

  if (tripIndex > -1) {
    trips.splice(tripIndex, 1);
  }
  saveTrip(trips);
};

export {
  takeDate,
  getTripTemplate,
  generateWeatherForecast,
  getCountryInfo,
  getCovidInfo,
  analysingCovidData,
  getAirportInfo,
  getFightInfo,
  getSavedTrips,
  saveTrip,
  removeTrip,
};
