import {
  getGeoData,
  getWeather,
  getPicture,
  getCountryInfo,
  getCovidInfo,
} from "../src/server/server-API.js";
import {
  resultGeoData,
  resultWeatherData,
  resultPicData,
  resulRestAPIData,
  resultCovidData,
} from "./mockApi/server-mockAPI";

import fetch from "node-fetch";
jest.mock("node-fetch", () => jest.fn());

describe("test getGeoData", () => {
  test("get an object of data when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resultGeoData));
    //input
    let city = "ha noi";

    //run function

    let result = await getGeoData(city);

    //output
    expect(result).toEqual({
      lat: "21.0245",
      lng: "105.84117",
      cityName: "Hanoi",
      countryCode: "VN",
      countryName: "Vietnam",
    });
  });
});

describe("test getWeather", () => {
  test("get an array of data 7 days weather forecast when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resultWeatherData));
    //input
    let lat = "35.7721";
    let lon = "-78.63861";

    //run function

    let result = await getWeather(lat, lon);

    //output
    expect(result.length).toBe(7);
    expect(result).toEqual([
      {
        forecastDate: "2020-12-13",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-14",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-15",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-16",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-17",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-18",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
      {
        forecastDate: "2020-12-19",
        maxTemp: 30,
        minTemp: 26,
        description: "Overcast clouds",
        icon: "c04d",
      },
    ]);
  });
});

describe("test getPicture", () => {
  test("get an URL of arrival city picture when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resultPicData));
    //input
    let city = "hanoi";

    //run function

    let result = await getPicture(city);

    //output
    expect(result).toBe("https://pixabay.com/get/35bbf209e13e39d2_640.jpg");
  });
});

describe("test getCountryInfo", () => {
  test("get an array of formatted data when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resulRestAPIData));
    //input
    let countryCode = "CO";

    //run function

    let result = await getCountryInfo(countryCode);

    //output
    expect(result).toEqual([
      {
        area: 1141748.0,
        capital: "Bogotá",
        currencyCode: "COP",
        currencyName: "Colombian peso",
        languageName: "Spanish",
        population: 48759958,
      },
    ]);
  });
});

describe("test getCovidInfo", () => {
  test("get an object of data when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resultCovidData));
    //input
    let city = "FR";

    //run function

    let result = await getCovidInfo(city);

    //output
    expect(result).toEqual([
      {
        cases: 2430612,
        country: "FR",
        deaths: 58015,
        last_update: "2020-12-13T19:26:27",
        recovered: 182685,
      },
    ]);
  });
});
