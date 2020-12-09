import moment from "moment";
import {
  takeDate,
  getTripTemplate,
  generateWeatherForecast,
  getCountryInfo,
  getCovidInfo,
  analysingCovidData,
  getAirportInfo,
  getFightInfo,
} from "./app-function";

// create function to update UI
function displayTripInfo(data) {
  /* const heroBox = getTripTemplate(); */
  // update background of trip by arrival city picture
  let background = document.querySelector(".hero-box");
  background.style.background = `url(${data[2].pic})`;
  background.style.backgroundSize = "cover";
  background.style.backgroundRepeat = "no-repeated";

  // update trip header
  let cityEL = document.getElementById("city");
  cityEL.textContent = `Trip to: ${data[0].arrCityName}`;

  let countryEL = document.getElementById("countryName");
  countryEL.textContent = data[0].arrCountryName;

  let dateStartEL = document.getElementById("start-date");
  const departDate = document.querySelector("#departure-date").value;
  dateStartEL.textContent = `Departing: ${takeDate(departDate)}`;

  let dateEndEL = document.getElementById("end-date");
  const arrivalDate = document.querySelector("#arrival-date").value;
  dateEndEL.textContent = `Arrival: ${takeDate(arrivalDate)}`;

  // trip count down
  let daysLeftEL = document.getElementById("calc-day");
  const startDay = moment(new Date(departDate));
  const today = moment(new Date());
  daysLeftEL.textContent = startDay.diff(today, "day") + 1;

  // get arrival city pic
  let imgEL = document.getElementById("city-pic");
  imgEL.setAttribute("src", `${data[2].pic}`);
  imgEL.setAttribute("alt", `${data[0].arrCityName}`);

  let tripEL = document.getElementById("tripName");
  tripEL.textContent = data[0].arrCityName;

  data[1].forEach((objectData) => {
    const weatherForecast = document.querySelector("#weather");
    const newForecast = generateWeatherForecast(objectData);
    weatherForecast.appendChild(newForecast);
  });

  const getInfo = function (data) {
    // general info of arrival country
    const countryName1 = document.querySelector(".country-name1");
    countryName1.innerHTML = data[0].arrCountryName;
    getCountryInfo(data[3]);

    // get covid Data
    const countryName2 = document.querySelector(".country-name2");
    countryName2.innerHTML = data[0].arrCountryName;
    const covidData = data[4].covid19.cases;
    const population = data[3].countryInfo[0].population;
    const covidLevel = document.querySelector(".covid-level");
    covidLevel.innerHTML = analysingCovidData(covidData, population);
    getCovidInfo(data[4]);

    //get Flight info
    getAirportInfo(data[5]);
    const depAirportCode = data[5].airportCodeByDepCity.code;
    getFightInfo(depAirportCode, data[6]);
  };
  getInfo(data);
  /* return heroBox; */
}

export { displayTripInfo };
