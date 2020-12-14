let resultGeoData = {
  status: 200,
  json: () => {
    return Promise.resolve([
      {
        lat: 48.864716,
        lng: 2.349014,
        cityName: "Paris",
        countryCode: "FR",
        countryName: "France",
      },
    ]);
  },
};

let resultWeatherData = {
  status: 200,
  json: () => {
    return Promise.resolve([
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
    ]);
  },
};

let resultPicData = {
  status: 200,
  json: () => {
    return Promise.resolve([
      {
        pic:
          "https://pixabay.com/get/57e8d0424e5bab14f1dc846096293e7d173fdce65a4c704f752873dd964ec55a_640.jpg",
      },
    ]);
  },
};

let resulRestAPIData = {
  status: 200,
  json: () => {
    return Promise.resolve([
      {
        area: 640679,
        capital: "Paris",
        currencyCode: "EUR",
        currencyName: "Euro",
        languageName: "French",
        population: 66710000,
      },
    ]);
  },
};

let resultCovidData = {
  status: 200,
  json: () => {
    return Promise.resolve([
      {
        cases: 2430612,
        country: "FR",
        deaths: 58015,
        last_update: "2020-12-13T19:26:27",
        recovered: 182685,
      },
    ]);
  },
};

let resultAirportCodeData = {
  status: 200,
  json: () => {
    return Promise.resolve([
      {
        code: "ORY",
        name: "Orly",
        country_name: "France",
      },
    ]);
  },
};

let resultFlightData = {
  status: 200,
  json: () => {
    return Promise.resolve([
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
    ]);
  },
};

export {
  resultGeoData,
  resultWeatherData,
  resulRestAPIData,
  resultCovidData,
  resultAirportCodeData,
  resultFlightData,
};
