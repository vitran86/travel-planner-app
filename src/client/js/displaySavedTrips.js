import moment from "moment";
import { trialDisplayTripInfo } from "./updateUI";
import {
  takeDate,
  getSavedTrips,
  removeSavedTrip,
  saveEditedNote,
} from "./app-function";

function displaySavedTrips() {
  const trips = getSavedTrips();
  trips.forEach((trip) => {
    const appBody = document.querySelector(".app-body");
    const heroBoxSavedTrip = generateDOMSavedTripsv2(trip);
    appBody.append(heroBoxSavedTrip);
  });
}

const generateDOMSavedTripsv2 = (trip) => {
  const obj = trialDisplayTripInfo(trip.data);

  const heroBoxSavedTrip = document.createElement("div");
  heroBoxSavedTrip.classList.add("hero-box");
  heroBoxSavedTrip.classList.add("active");
  heroBoxSavedTrip.style.background = `url(${obj.background})`;
  heroBoxSavedTrip.style.backgroundSize = "cover";
  heroBoxSavedTrip.style.backgroundRepeat = "no-repeated";

  const container = document.createElement("div");
  container.classList.add("container");
  heroBoxSavedTrip.appendChild(container);
  // header
  const location = document.createElement("div");
  location.classList.add("location");
  container.appendChild(location);

  const tripTo = document.createElement("div");
  tripTo.classList.add("trip-to");
  tripTo.innerHTML = `${obj.arrCityEL},${obj.arrCountryEl} `;
  location.appendChild(tripTo);

  const startDate = document.createElement("div");
  startDate.classList.add("start-date");
  startDate.innerHTML = `Departing: ${takeDate(trip.depDate)}`;
  location.appendChild(startDate);

  const endDate = document.createElement("div");
  endDate.classList.add("end-date");
  endDate.innerHTML = `Arrival: ${takeDate(trip.arrDate)}`;
  location.appendChild(endDate);
  console.log(location);
  // country card
  const card = document.createElement("div");
  card.classList.add("country-card");
  container.appendChild(card);

  // ** pic **//
  const cardImg = document.createElement("img");
  cardImg.classList.add("city-pic");
  cardImg.setAttribute("src", `${obj.cardImgEL}`);
  cardImg.setAttribute("alt", `${obj.description}`);
  card.appendChild(cardImg);
  console.log(cardImg);

  // ** country info **//
  const countryInfo = document.createElement("div");
  countryInfo.classList.add("country-info");
  countryInfo.innerHTML = `${obj.countryNameEL}, a country which has
    ${obj.areaEL} million square kilometers (km²)
    land area with population of
    ${obj.populationEL} million people. Their capital
    is ${obj.capitalEL}. Main language here is
    ${obj.languageEL}. Currency is
    ${obj.currencyCodeEL}(${obj.currencyNameEL})`;
  card.appendChild(countryInfo);
  console.log(countryInfo);

  const countryInfoBtn = document.createElement("button");
  countryInfoBtn.classList.add("country-info-btn");
  countryInfoBtn.setAttribute("type", "button");
  countryInfoBtn.textContent = "Country Info";
  countryInfoBtn.addEventListener("click", (e) => {
    console.log(`country btn clicked`);
    if (
      countryInfoBtn.classList.contains("clicked") &&
      countryInfo.classList.contains("active") &&
      card.classList.contains("active1")
    ) {
      e.target.textContent = "Country Info";
      countryInfoBtn.classList.remove("clicked");
      countryInfo.classList.remove("active");
      card.classList.remove("active1");
    } else {
      e.target.textContent = "Close";
      countryInfoBtn.classList.add("clicked");
      countryInfo.classList.add("active");
      card.classList.add("active1");
    }
  });
  card.appendChild(countryInfoBtn);

  //** covid info **//
  const covidInfo = document.createElement("div");
  covidInfo.classList.add("covid19-info");
  covidInfo.innerHTML = `${obj.countryNameEL} is a country has
    ${obj.covidLevel} level of COVID-19.(Currently
    active case is ${obj.activeCases}. Last updated
    is at ${obj.lastUpdate}.`;

  card.appendChild(covidInfo);
  console.log(covidInfo);

  const covidInfoBtn = document.createElement("button");
  covidInfoBtn.classList.add("covid-info-btn");
  covidInfoBtn.setAttribute("type", "button");
  covidInfoBtn.textContent = "Covid-19 Info";
  covidInfoBtn.addEventListener("click", (e) => {
    console.log(`covid btn clicked`);
    if (
      covidInfoBtn.classList.contains("clicked") &&
      covidInfo.classList.contains("active") &&
      card.classList.contains("active2")
    ) {
      e.target.textContent = "Covid-19 Info";
      covidInfoBtn.classList.remove("clicked");
      covidInfo.classList.remove("active");
      card.classList.remove("active2");
    } else {
      e.target.textContent = "Close";
      covidInfoBtn.classList.add("clicked");
      covidInfo.classList.add("active");
      card.classList.add("active2");
    }
  });
  card.appendChild(covidInfoBtn);

  // ** trip count down ** //
  const dayCount = document.createElement("div");
  dayCount.classList.add("day-count");
  const startDay = moment(new Date(trip.depDate));
  const today = moment(new Date());
  let daysLeftEL = startDay.diff(today, "day") + 1;
  dayCount.innerHTML = `${obj.arrCityEL} is ${daysLeftEL} days away.`;
  card.appendChild(dayCount);
  console.log(dayCount);

  const tripCountDownBtn = document.createElement("button");
  tripCountDownBtn.classList.add("count-down-btn");
  tripCountDownBtn.setAttribute("type", "button");
  tripCountDownBtn.textContent = "Trip count down";
  tripCountDownBtn.addEventListener("click", (e) => {
    console.log(`count down btn clicked`);
    if (
      tripCountDownBtn.classList.contains("clicked") &&
      dayCount.classList.contains("active") &&
      card.classList.contains("active3")
    ) {
      e.target.textContent = "Trip count down";
      tripCountDownBtn.classList.remove("clicked");
      dayCount.classList.remove("active");
      card.classList.remove("active3");
    } else {
      e.target.textContent = "Close";
      tripCountDownBtn.classList.add("clicked");
      dayCount.classList.add("active");
      card.classList.add("active3");
    }
  });
  card.appendChild(tripCountDownBtn);

  // ** weather forecast **//
  const weatherForecast = document.createElement("div");
  weatherForecast.classList.add("weather-forecast");
  const title = document.createElement("h3");
  title.textContent = `Weather forecast in next 16 days`;
  weatherForecast.appendChild(title);

  weatherForecast.append(obj.generatedWeatherItems);
  card.append(weatherForecast);
  console.log(weatherForecast);

  const weatherForecastBtn = document.createElement("button");
  weatherForecastBtn.setAttribute("id", "weather-detail");
  weatherForecastBtn.setAttribute("type", "button");
  weatherForecastBtn.textContent = "Get weather Forecast";
  weatherForecastBtn.addEventListener("click", (e) => {
    console.log(`weather btn clicked`);
    if (
      weatherForecastBtn.classList.contains("clicked") &&
      weatherForecast.classList.contains("active") &&
      card.classList.contains("active4")
    ) {
      e.target.textContent = "Get Weather Forecast";
      weatherForecastBtn.classList.remove("clicked");
      weatherForecast.classList.remove("active");
      card.classList.remove("active4");
    } else {
      e.target.textContent = "Close";
      weatherForecastBtn.classList.add("clicked");
      weatherForecast.classList.add("active");
      card.classList.add("active4");
    }
  });
  card.appendChild(weatherForecastBtn);

  // ** flight info **//

  const flightInfo = document.createElement("div");
  flightInfo.classList.add("flight-info");

  const flightTitle = document.createElement("h3");
  flightTitle.textContent = `Direct flight info`;
  flightInfo.appendChild(flightTitle);

  const text = document.createElement("p");
  text.textContent = `(auto detected by nearest airport)`;
  flightInfo.appendChild(text);

  const depInfo = document.createElement("div");
  depInfo.classList.add("departure-info");
  depInfo.innerHTML = ` From ${obj.depAirportCode}(
     ${obj.depAirportName}) - ${obj.depCountry}`;
  flightInfo.appendChild(depInfo);

  const arrInfo = document.createElement("div");
  arrInfo.classList.add("arrival-info");
  arrInfo.innerHTML = `To ${obj.arrAirportCode}(
      ${obj.arrAirportName}) - ${obj.arrCountryEl}`;
  flightInfo.appendChild(arrInfo);

  flightInfo.append(obj.generatedFlightItems);
  card.append(flightInfo);
  console.log(flightInfo);

  const flightBtn = document.createElement("button");
  flightBtn.classList.add("get-flight-btn");
  flightBtn.setAttribute("type", "button");
  flightBtn.textContent = "Flight Info";
  flightBtn.addEventListener("click", (e) => {
    console.log(`flight btn clicked`);
    if (
      flightBtn.classList.contains("clicked") &&
      flightInfo.classList.contains("active") &&
      card.classList.contains("active5")
    ) {
      e.target.textContent = "Flight Info";
      flightBtn.classList.remove("clicked");
      flightInfo.classList.remove("active");
      card.classList.remove("active5");
    } else {
      e.target.textContent = "Close";
      flightBtn.classList.add("clicked");
      flightInfo.classList.add("active");
      card.classList.add("active5");
    }
  });
  card.appendChild(flightBtn);

  // ** Note ** //
  const noteContainer = document.createElement("div");
  container.appendChild(noteContainer);

  const addNoteBtn = document.createElement("button");
  addNoteBtn.setAttribute("id", "edit-note");
  addNoteBtn.setAttribute("type", "button");
  addNoteBtn.textContent = "Edit Note";
  noteContainer.appendChild(addNoteBtn);

  const note = document.createElement("textarea");
  note.setAttribute("rows", "10");
  note.setAttribute("cols", "50");
  note.setAttribute("disabled", "true");
  note.innerHTML = trip.note;
  noteContainer.append(note);

  // set event listener for edit note btn
  addNoteBtn.addEventListener("click", (e) => {
    console.log(`Edit note clicked`);
    if (addNoteBtn.classList.contains("clicked1")) {
      e.target.textContent = "Edit Note";
      addNoteBtn.classList.remove("clicked1");
      note.setAttribute("disabled", "true");
    } else {
      e.target.textContent = " Save note";
      addNoteBtn.classList.add("clicked1");
      note.removeAttribute("disabled", "true");
    }
  });

  addNoteBtn.addEventListener("click", (e) => {
    console.log("SAVE NOTE CLICKED");
    if (
      e.target.value === "Save Note" &&
      addNoteBtn.classList.contains("clicked2")
    ) {
      e.target.textContent = "Edit Note";
      addNoteBtn.classList.remove("clicked2");
      note.setAttribute("disabled", "true");
    } else {
      addNoteBtn.classList.add("clicked2");
      const idUpdatedNote = trip.id;
      const updatedNote = note.value;
      saveEditedNote(idUpdatedNote, updatedNote);
    }
  });

  // ** save & delete button **//
  const endCard = document.createElement("div");
  const id = trip.id;
  endCard.setAttribute("id", `${id}`);
  endCard.classList.add("end-card-btn");
  container.appendChild(endCard);

  /* const saveBtn = document.createElement("button");
  saveBtn.setAttribute("id", "save-btn");
  saveBtn.setAttribute("type", "button");
  saveBtn.textContent = `Save trip`;
  saveBtn.addEventListener("click", (e) => {
    console.log(`save btn clicked`);
    const trips = getSavedTrips();
    const id = e.target.parentElement.id;
    trips.push({
      id: id,
      data: data,
      note: note.value,
    });
    console.log(trips);
    localStorage.setItem("trips", JSON.stringify(trips));
  });
  endCard.appendChild(saveBtn); */

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete-btn");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = `Remove trip`;
  deleteBtn.addEventListener("click", (e) => {
    console.log(`remove trip clicked`);
    // manage button clicked
    e.target.textContent = "Deleting...";
    setTimeout(function () {
      deleteBtn.setAttribute("disabled", "true");
    }, 1000);
    const tripId = e.target.parentElement.id;
    removeSavedTrip(tripId);
  });
  endCard.appendChild(deleteBtn);

  return heroBoxSavedTrip;
};

export { displaySavedTrips };
