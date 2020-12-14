import moment from "moment";
import {
  takeDate,
  generateWeatherForecast,
  analysingCovidData,
  getFlightInfo,
} from "./app-function";

// create function to update UI
function displayTripInfo(data) {
  // update background of trip by arrival city picture
  let background = data[2].pic;

  // update trip header
  let arrCityEL = `Trip to: ${data[0].arrCityName}`;
  let arrCountryEl = data[0].arrCountryName;

  const departDate = document.querySelector("#departure-date").value;
  let dateStartEL = `Departing: ${takeDate(departDate)}`;

  const arrivalDate = document.querySelector("#arrival-date").value;
  let dateEndEL = `Arrival: ${takeDate(arrivalDate)}`;

  // get arrival city pic
  let cardImgEL = data[2].pic;
  let description = data[0].arrCityName;

  // trip count down
  const startDay = moment(new Date(departDate));
  const today = moment(new Date());
  let daysLeftEL = startDay.diff(today, "day") + 1;

  // general info of arrival country
  let countryNameEL = data[0].arrCountryName;
  let areaEL = (data[3].countryInfo[0].area / 100000).toFixed(2);
  let populationEL = (data[3].countryInfo[0].population / 1000000).toFixed(2);
  let capitalEL = data[3].countryInfo[0].capital;
  let languageEL = data[3].countryInfo[0].languageName;
  let currencyCodeEL = data[3].countryInfo[0].currencyCode;
  let currencyNameEL = data[3].countryInfo[0].currencyName;

  // get covid Data
  const population = data[3].countryInfo[0].population;
  let lastUpdate = new Date(data[4].covid19.last_update).toLocaleDateString();
  let activeCases = data[4].covid19.cases;
  let covidLevel = analysingCovidData(activeCases, population);

  // get weather forecast
  let generatedWeatherItems = getWeatherItems(data);

  function getWeatherItems(data) {
    const weatherDetail = document.createElement("ul");
    weatherDetail.setAttribute("id", "weather");
    data[1].forEach((objectData) => {
      let forecastItems = generateWeatherForecast(objectData);
      weatherDetail.append(forecastItems);
    });
    return weatherDetail;
  }

  //get Flight info

  let depAirportCode = data[5].airportCodeByDepCity.code;
  let depAirportName = data[5].airportCodeByDepCity.name;
  let depCountry = data[5].airportCodeByDepCity.country_name;
  let arrAirportCode = "";
  let arrAirportName = "";

  if (data[5].airportCodeByArrCity.code) {
    arrAirportCode = data[5].airportCodeByArrCity.code;
    arrAirportName = data[5].airportCodeByArrCity.name;
  } else {
    arrAirportCode = "Can't find airport";
    arrAirportName = "Error data";
  }

  let generatedFlightItems = getFlightInfo(depAirportCode, data[6]);

  return {
    background,
    arrCityEL,
    arrCountryEl,
    dateStartEL,
    dateEndEL,
    cardImgEL,
    description,
    countryNameEL,
    areaEL,
    populationEL,
    capitalEL,
    languageEL,
    currencyCodeEL,
    currencyNameEL,
    covidLevel,
    activeCases,
    lastUpdate,
    daysLeftEL,
    generatedWeatherItems,
    depAirportCode,
    depAirportName,
    depCountry,
    arrAirportCode,
    arrAirportName,
    generatedFlightItems,
  };
}

export { displayTripInfo };
