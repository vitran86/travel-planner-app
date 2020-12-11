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

function getFlightInfo(depAirportCode, flights) {
  const flightsFiltered = flights.filter((flight) => {
    const depAirportIATA = flight.depIATA;
    return depAirportCode === depAirportIATA;
  });

  if (flightsFiltered.length > 0) {
    const flightItems = document.createElement("ul");
    flightItems.setAttribute("id", "flight");
    flightsFiltered.forEach((filteredFlight) => {
      const flightDetail = displayFlightInfo(filteredFlight);
      flightItems.append(flightDetail);
    });
    return flightItems;
  } else if (flightsFiltered.length === 0) {
    const resultMsg = document.createElement("div");
    resultMsg.classList.add("cant-get-flight");
    resultMsg.innerHTML = " Can't find any direct flight for these airports!";
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
const saveTrip = (e, trip) => {
  const trips = getSavedTrips();
  const id = e.target.parentElement.id;
  /* const tripTo = document.querySelector(".trip-to").innerText;
  const depDate = document.getElementById("start-date").innerText;
  const arrDate = document.getElementById("end-date").innerText;
  const tripImg = trip[2];
  const countryInfo = document.querySelector(".country-info").innerText;
  const covidInfo = document.querySelector(".covid19-info").innerText;
  const weatherForecast = document.getElementById("weather").innerHTML;
  const depAirport = document.querySelector(".departure-info").innerText;
  const arrAirport = document.querySelector(".arrival-info").innerText;
  const flightInfo = document.querySelector("#flight").innerHTML; */
  const note = document.querySelector("#note").value;

  trips.push({
    id,
    trip,
    note,
  });

  console.log(trips);
  localStorage.setItem("trips", JSON.stringify(trips));
};

// Remove a trip from the list
function removeSavedTrip(id) {
  const trips = getSavedTrips();
  const tripIndex = trips.findIndex((trip) => {
    return trip.id === id;
  });

  if (tripIndex > -1) {
    trips.splice(tripIndex, 1);
  }
  console.log(trips);
}

// Remove all trips from the list
const reset = () => {
  localStorage.clear();
};

const saveEditedNote = (idUpdatedNote, updatedNote) => {
  const trips = getSavedTrips();
  const updatedTrips = trips.map((trip) => {
    if (trip.id === idUpdatedNote) {
      return {
        ...trip,
        note: updatedNote,
      };
    } else {
      return { ...trip };
    }
  });
  console.log(updatedTrips);
  localStorage.setItem("trips", JSON.stringify(updatedTrips));
};

// filter trips

export {
  takeDate,
  generateWeatherForecast,
  getCountryInfo,
  getCovidInfo,
  analysingCovidData,
  getAirportInfo,
  getFlightInfo,
  getSavedTrips,
  saveTrip,
  removeSavedTrip,
  reset,
  saveEditedNote,
};
