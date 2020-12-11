/* const countryCard = document.querySelector(".country-card");

// handle button of country info
const countryInfoBtnClick = function () {
  const countryInfoBtn = document.querySelector(".country-info-btn");
  const countryInfo = document.querySelector(".country-info");
  countryInfoBtn.addEventListener("click", (e) => {
    if (
      countryInfoBtn.classList.contains("clicked") &&
      countryInfo.classList.contains("active") &&
      countryCard.classList.contains("active1")
    ) {
      e.target.textContent = "Country Info";
      countryInfoBtn.classList.remove("clicked");
      countryInfo.classList.remove("active");
      countryCard.classList.remove("active1");
    } else {
      e.target.textContent = "Close";
      countryInfoBtn.classList.add("clicked");
      countryInfo.classList.add("active");
      countryCard.classList.add("active1");
    }
  });
};

// handle button of covid info
const covidBtnClick = function () {
  const covidInfoBtn = document.querySelector(".covid-info-btn");
  const covidInfo = document.querySelector(".covid19-info");
  covidInfoBtn.addEventListener("click", (e) => {
    if (
      covidInfoBtn.classList.contains("clicked") &&
      covidInfo.classList.contains("active") &&
      countryCard.classList.contains("active2")
    ) {
      e.target.textContent = "Covid-19 Info";
      covidInfoBtn.classList.remove("clicked");
      covidInfo.classList.remove("active");
      countryCard.classList.remove("active2");
    } else {
      e.target.textContent = "Close";
      covidInfoBtn.classList.add("clicked");
      covidInfo.classList.add("active");
      countryCard.classList.add("active2");
    }
  });
};

// handle button of trip count down
const tripCountDownBtnClick = function () {
  const tripCountDownBtn = document.querySelector(".count-down-btn");
  const dayCount = document.querySelector(".day-count");
  tripCountDownBtn.addEventListener("click", (e) => {
    if (
      tripCountDownBtn.classList.contains("clicked") &&
      dayCount.classList.contains("active") &&
      countryCard.classList.contains("active3")
    ) {
      e.target.textContent = "Trip count down";
      tripCountDownBtn.classList.remove("clicked");
      dayCount.classList.remove("active");
      countryCard.classList.remove("active3");
    } else {
      e.target.textContent = "Close";
      tripCountDownBtn.classList.add("clicked");
      dayCount.classList.add("active");
      countryCard.classList.add("active3");
    }
  });
};

// handle button of weather forecast
const weatherForecastBtnClick = function () {
  const weatherForecastBtn = document.querySelector("#weather-detail");
  const weatherForecast = document.querySelector(".weather-forecast");
  weatherForecastBtn.addEventListener("click", (e) => {
    if (
      weatherForecastBtn.classList.contains("clicked") &&
      weatherForecast.classList.contains("active") &&
      countryCard.classList.contains("active4")
    ) {
      e.target.textContent = "Get Weather Forecast";
      weatherForecastBtn.classList.remove("clicked");
      weatherForecast.classList.remove("active");
      countryCard.classList.remove("active4");
    } else {
      e.target.textContent = "Close";
      weatherForecastBtn.classList.add("clicked");
      weatherForecast.classList.add("active");
      countryCard.classList.add("active4");
    }
  });
};

// handle button of flight info
const flightBtnClick = function () {
  const flightBtn = document.querySelector(".get-flight-btn");
  const flightInfo = document.querySelector(".flight-info");
  flightBtn.addEventListener("click", (e) => {
    if (
      flightBtn.classList.contains("clicked") &&
      flightInfo.classList.contains("active") &&
      countryCard.classList.contains("active5")
    ) {
      e.target.textContent = "Flight Info";
      flightBtn.classList.remove("clicked");
      flightInfo.classList.remove("active");
      countryCard.classList.remove("active5");
    } else {
      e.target.textContent = "Close";
      flightBtn.classList.add("clicked");
      flightInfo.classList.add("active");
      countryCard.classList.add("active5");
    }
  });
};

export {
  countryInfoBtnClick,
  covidBtnClick,
  tripCountDownBtnClick,
  weatherForecastBtnClick,
  flightBtnClick,
};
 */
