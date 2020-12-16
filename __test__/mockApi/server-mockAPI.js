let resultGeoData = {
  status: 200,
  json: () => {
    return Promise.resolve({
      totalResultsCount: 1707,
      geonames: [
        {
          adminCode1: "44",
          lng: "105.84117",
          geonameId: 1581130,
          toponymName: "Hanoi",
          countryId: "1562822",
          fcl: "P",
          population: 1431270,
          countryCode: "VN",
          name: "Hanoi",
          fclName: "city, village,...",
          countryName: "Vietnam",
          fcodeName: "capital of a political entity",
          adminName1: "Hanoi",
          lat: "21.0245",
          fcode: "PPLC",
        },
      ],
    });
  },
};

let resultWeatherData = {
  status: 200,
  json: () => {
    return Promise.resolve({
      data: [
        {
          valid_date: "2020-12-13",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-14",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-15",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-16",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-17",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-18",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
        {
          valid_date: "2020-12-19",
          temp: 25,
          max_temp: 30,
          min_temp: 26,
          high_temp: 30,
          low_temp: 24.5,
          app_max_temp: 30.64,
          app_min_temp: 23.64,
          weather: {
            icon: "c04d",
            code: "804",
            description: "Overcast clouds",
          },
        },
      ],
      city_name: "Raleigh",
      lon: "-78.63861",
      timezone: "America/New_York",
      lat: "35.7721",
      country_code: "US",
      state_code: "NC",
    });
  },
};

let resultPicData = {
  status: 200,
  json: () => {
    return Promise.resolve({
      total: 4692,
      totalHits: 500,
      hits: [
        {
          id: 195893,
          pageURL: "https://pixabay.com/en/blossom-bloom-flower-195893/",
          type: "photo",
          tags: "blossom, bloom, flower",
          previewURL:
            "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
          previewWidth: 150,
          previewHeight: 84,
          webformatURL: "https://pixabay.com/get/35bbf209e13e39d2_640.jpg",
          webformatWidth: 640,
          webformatHeight: 360,
          largeImageURL: "https://pixabay.com/get/ed6a99fd0a76647_1280.jpg",
          fullHDURL: "https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg",
          imageURL: "https://pixabay.com/get/ed6a9364a9fd0a76647.jpg",
          imageWidth: 4000,
          imageHeight: 2250,
          imageSize: 4731420,
          views: 7671,
          downloads: 6439,
          favorites: 1,
          likes: 5,
          comments: 2,
          user_id: 48777,
          user: "Josch13",
          userImageURL:
            "https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
        },
      ],
    });
  },
};

let resulRestAPIData = {
  status: 200,
  json: () => {
    return Promise.resolve({
      name: "Colombia",
      topLevelDomain: [".co"],
      alpha2Code: "CO",
      alpha3Code: "COL",
      callingCodes: ["57"],
      capital: "Bogotá",
      altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
      region: "Americas",
      subregion: "South America",
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: "Colombian",
      area: 1141748.0,
      gini: 55.9,
      timezones: ["UTC-05:00"],
      borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
      nativeName: "Colombia",
      numericCode: "170",
      currencies: [
        {
          code: "COP",
          name: "Colombian peso",
          symbol: "$",
        },
        {},
      ],
      languages: [
        {
          iso639_1: "es",
          iso639_2: "spa",
          name: "Spanish",
          nativeName: "Español",
        },
      ],
      translations: {
        de: "Kolumbien",
        es: "Colombia",
        fr: "Colombie",
        ja: "コロンビア",
        it: "Colombia",
        br: "Colômbia",
        pt: "Colômbia",
      },
      flag: "https://restcountries.eu/data/col.svg",
      regionalBlocs: [
        {
          acronym: "PA",
          name: "Pacific Alliance",
          otherAcronyms: [],
          otherNames: ["Alianza del Pacífico"],
        },
        {
          acronym: "USAN",
          name: "Union of South American Nations",
          otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
          otherNames: [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union",
          ],
        },
      ],
      cioc: "COL",
    });
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

export {
  resultGeoData,
  resultWeatherData,
  resultPicData,
  resulRestAPIData,
  resultCovidData,
};
