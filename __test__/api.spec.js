import { postDataToServer } from "../src/client/js/api.js";
import { arrayResultData } from "./mockApi/client-mockAPI";

global.fetch = jest.fn(() => Promise.resolve(arrayResultData));

describe("test postDataToServer", () => {
  test("get array of consolidated data when success", async () => {
    //input
    let depCity = "ha noi";
    let arrCity = "ho chi minh";

    //run function

    let result = await postDataToServer(depCity, arrCity);
    console.log(result);

    //output
    expect(result.length).toBe(7);
    expect(result).toEqual([
      {
        arrCityName: "Ho Chi Minh City",
        arrCountryCode: "VN",
        arrCountryName: "Vietnam",
        depCityName: "Hanoi",
        depCountryCode: "VN",
        depCountryName: "Vietnam",
      },
      [
        {
          forecastDate: "2020-12-13",
          maxTemp: 7.7,
          minTemp: 6.6,
          description: "Overcast clouds",
          icon: "c04d",
        },
        {
          forecastDate: "2020-12-14",
          maxTemp: 11.4,
          minTemp: 7.9,
          description: "Light shower rain",
          icon: "r04d",
        },
      ],
      {
        pic:
          "https://pixabay.com/get/53e0d542495aa414f1dc846096293e7d173fdce65a4c704f752872d4934ec05e_640.jpg",
      },
      {
        countryInfo: {
          area: 331212,
          capital: "Hanoi",
          currencyCode: "VND",
          currencyName: "Vietnamese đồng",
          languageName: "Vietnamese",
          population: 92700000,
        },
      },
      {
        covid19: {
          cases: 1397,
          country: "VN",
          deaths: 35,
          last_update: "2020-12-13T23:27:49",
          recovered: 1241,
        },
      },
      {
        airportCodeByArrCity: {
          code: "SGN",
          name: "Tan Son Nhat International",
          country_name: "Vietnam",
        },
        airportCodeByDepCity: {
          code: "HAN",
          name: "Noibai International",
          country_name: "Vietnam",
        },
      },
      [
        {
          depIATA: "DOH",
          depAirport: "Doha International",
          airline: "Qatar Airways",
          flight: "QR8950",
          scheduledTime: "3:00:00 PM",
        },
        {
          depIATA: "HKG",
          depAirport: "Hong Kong International",
          airline: "Ethiopian Airlines",
          flight: "ET3729",
          scheduledTime: "11:00:00 PM",
        },
        {
          depIATA: "DXB",
          depAirport: "Dubai",
          airline: "Emirates",
          flight: "EK9852",
          scheduledTime: "12:35:00 AM",
        },
        {
          depIATA: "ICN",
          depAirport: "Seoul (Incheon)",
          airline: "Asiana Airlines",
          flight: "OZ951",
          scheduledTime: "3:15:00 AM",
        },
        {
          depIATA: "RUH",
          depAirport: "King Khaled International",
          airline: "Turkish Airlines",
          flight: "TK6564",
          scheduledTime: "5:20:00 AM",
        },
        {
          depIATA: "HKG",
          depAirport: "Hong Kong International",
          airline: "Singapore Airlines",
          flight: "SQ7197",
          scheduledTime: "11:00:00 PM",
        },
        {
          depIATA: "HYD",
          depAirport: "Hyderabad Airport",
          airline: "Air India Express",
          flight: "IX1988",
          scheduledTime: "2:05:00 AM",
        },
      ],
    ]);
  });
});
