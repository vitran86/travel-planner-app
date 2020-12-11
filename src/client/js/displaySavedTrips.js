import moment from "moment";
import { getSavedTrips, removeSavedTrip } from "./app-function";

function displaySavedTrips() {
  const trips = getSavedTrips();
  trips.forEach((trip) => {
    const appBody = document.querySelector(".app-body");
    const heroBox = generateDOMSavedTrips(trip);
    appBody.append(heroBox);
  });
}

// create function generate DOM for saved trips

const generateDOMSavedTrips = (trip) => {
  const heroBox = document.createElement("div");
  heroBox.classList.add("hero-box");
  heroBox.classList.add("active");

  // update background of trip by arrival city picture
  heroBox.style.background = `url(${trip[1].tripImg.pic})`;
  heroBox.style.backgroundSize = "cover";
  heroBox.style.backgroundRepeat = "no-repeated";

  const container = document.createElement("div");
  container.classList.add("container");
  heroBox.appendChild(container);
  // header
  const location = document.createElement("div");
  location.classList.add("location");
  container.appendChild(location);

  const tripTo = document.createElement("div");
  tripTo.classList.add("trip-to");
  tripTo.innerHTML = trip[1].tripTo;
  location.appendChild(tripTo);

  const startDate = document.createElement("div");
  startDate.classList.add("start-date");
  startDate.innerHTML = trip[1].depDate;
  location.appendChild(startDate);

  const endDate = document.createElement("div");
  endDate.classList.add("end-date");
  endDate.innerHTML = trip[1].arrDate;
  location.appendChild(endDate);

  // country card
  const card = document.createElement("div");
  card.classList.add("country-card");
  container.appendChild(card);

  // ** pic **//
  const cardImg = document.createElement("img");
  cardImg.classList.add("city-pic");
  cardImg.setAttribute("src", `${trip[1].tripImg.pic}`);
  card.appendChild(cardImg);

  // ** country info **//
  const countryInfo = document.createElement("div");
  countryInfo.classList.add("country-info");
  countryInfo.innerHTML = trip[2].countryInfo;
  card.appendChild(countryInfo);

  const countryInfoBtn = document.createElement("button");
  countryInfoBtn.classList.add("country-info-btn");
  countryInfoBtn.setAttribute("type", "button");
  countryInfoBtn.textContent = "Country Info";
  countryInfoBtn.addEventListener("click", (e) => {
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
  covidInfo.innerHTML = trip[2].covidInfo;
  card.appendChild(covidInfo);

  const covidInfoBtn = document.createElement("button");
  covidInfoBtn.classList.add("covid-info-btn");
  covidInfoBtn.setAttribute("type", "button");
  covidInfoBtn.textContent = "Covid-19 Info";
  covidInfoBtn.addEventListener("click", (e) => {
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
  const startDay = moment(new Date(trip[1].depDate));
  const today = moment(new Date());
  const daysLeftEL = startDay.diff(today, "day") + 1;
  dayCount.innerHTML = `${trip[1].tripTo} is ${daysLeftEL} days away.`;
  card.appendChild(dayCount);

  const tripCountDownBtn = document.createElement("button");
  tripCountDownBtn.classList.add("count-down-btn");
  tripCountDownBtn.setAttribute("type", "button");
  tripCountDownBtn.textContent = "Trip count down";
  tripCountDownBtn.addEventListener("click", (e) => {
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
  /* const weatherItems = document.createElement("ul");
  weatherItems.setAttribute("id", "weather");
  weatherItems.innerHTML = trip[3].weatherForecast;
  weatherForecast.appendChild(weatherItems);
  card.appendChild(weatherForecast);
 */
  const weatherForecastBtn = document.createElement("button");
  weatherForecastBtn.setAttribute("id", "weather-detail");
  weatherForecastBtn.setAttribute("type", "button");
  weatherForecastBtn.textContent = "Get weather Forecast";
  weatherForecastBtn.addEventListener("click", (e) => {
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
  depInfo.innerHTML = trip[4].depAirport;
  flightInfo.appendChild(depInfo);

  const arrInfo = document.createElement("div");
  arrInfo.classList.add("arrival-info");
  arrInfo.innerHTML = trip[4].arrAirport;
  flightInfo.appendChild(arrInfo);

  const flightItems = document.createElement("ul");
  flightItems.setAttribute("id", "flight");
  flightItems.innerHTML = trip[5].flightInfo;
  flightInfo.appendChild(flightItems);
  card.appendChild(flightInfo);

  const flightBtn = document.createElement("button");
  flightBtn.classList.add("get-flight-btn");
  flightBtn.setAttribute("type", "button");
  flightBtn.textContent = "Flight Info";
  flightBtn.addEventListener("click", (e) => {
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
  const note = document.createElement("textarea");
  note.setAttribute("rows", "10");
  note.setAttribute("cols", "50");
  note.innerHTML = trip[6].note;
  container.appendChild(note);

  // ** delete button **//
  const endCard = document.createElement("div");
  endCard.setAttribute("id", `${trip[0].id}`);
  endCard.classList.add("end-card-btn");
  container.appendChild(endCard);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete-btn");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = `Remove trip`;
  deleteBtn.addEventListener("click", (e) => {
    removeSavedTrip();
  });
  endCard.appendChild(deleteBtn);

  return heroBox;
};

export { displaySavedTrips };
