import {
  getGeoData,
  getWeather,
  getPicture,
  getCountryInfo,
  getCovidInfo,
  getFlightInfo,
  getAirportCodeByCity,
} from "../src/server/server-API.js";
import {
  resultGeoData,
  resultWeatherData,
  resulRestAPIData,
  resultCovidData,
  resultAirportCodeData,
  resultFlightData,
} from "./mockApi/server-mockAPI";

global.fetch = jest.fn(() => Promise.resolve());

describe("test getGeoData", () => {
  test("get an object of formatted data when success", async () => {
    fetch.mockImplementationOnce(() => Promise.resolve(resultGeoData));
    //input
    let city = "paris";

    //run function

    let result = await getGeoData(city);
    console.log(result);

    //output
    expect(result).toBe([
      {
        lat: 48.864716,
        lng: 2.349014,
        cityName: "Paris",
        countryCode: "FR",
        countryName: "France",
      },
    ]);
  });
});
