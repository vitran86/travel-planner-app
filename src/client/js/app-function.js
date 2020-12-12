import { displaySavedTrips } from "./displaySavedTrips";

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

// create function to generate datof weather forecast
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

// create function analysing covid data
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

// create function to get flight data
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

// create function to display flight data (if any)
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
const saveTrip = () => {
  const trips = getSavedTrips();
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
  localStorage.setItem("trips", JSON.stringify(trips));
  reload();
}

// Remove all trips from the list
const reset = () => {
  localStorage.clear();
};

// function reload app after save/delete
const reload = () => {
  setTimeout(function () {
    location.reload();
  }, 1000);
};

// function to modifies saved note
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
  analysingCovidData,
  getFlightInfo,
  getSavedTrips,
  saveTrip,
  removeSavedTrip,
  reset,
  reload,
  saveEditedNote,
};
