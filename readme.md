# TRAVEL PLANNER APPLICATION

## Description

This app takes user's information about their trip (including departure & arrival dates, departure & arrival cities) and **display information related to those trips dynamically**.The travel information for trip includes:

- General information about the country of arrival city (area, population, language, currency and covid level)
- Weather forecast in next 16 days (taken from current date)
- Trip count down ( from current date to departure date)
- Direct flight detected from the nearest airport of departure city to the nearest airport of arrival city.

It also allows user to **take note** for their trips. **The background of landing page is automatically updated according to 4 seasons during year**.

## Instruction for using App

- Input departure & arrival dates, departure & arrival cities which are needed to generate trip, then click **Add Trip** to get the result.
- The app will check your input, then display the result accordingly. The city name is not case-sensitive, but spelling is important. If the input is a bad input, the app will require user's revision for further process.
- In the genrerated trip card, user can use all buttons to see the information related to the trip by click it. For example, clicking button **Covid-19 info** will shows data related to arrival country by evaluating the covid level, providing case number and the last updated date. Feel free to explore all functions by yourself.
- If you need to take note, click **Add note**. The taken note can be revise (edit) later when you save the trip.
- Click **Save trip** when you want to keep it, or **Remove trip** if you don't need it. For finding trip, please note that **all saved trips are automatically sorted by departure date**, **new generated trip (not save yet) is after saved trip(s)**.
- For saved trips, you can edit taken note as many times as needed, delete trip when done or in case change plan.

## Prerequisite

This app uses **Node** to run local server and require below API Keys to fetch data:

- **API key of [GeoNames](https://www.geonames.org/export/web-services.html)**
- **API key of [Weatherbit](https://www.weatherbit.io/api)**
- **API key of [Pixabay](https://pixabay.com/api/docs/)**
- **API key of [AirLabs](http://airlabs.co/#/get_started)**
- **API key of [aviationstack](https://aviationstack.com/documentation)**

Beside that, this app also use data from APIs of

- **[Rest Countries](https://restcountries.eu/)**
  and **[Covid-19 API](https://documenter.getpostman.com/view/10877427/SzYW2f8n?version=latest)**
  (These APIs do not require key)

## Installation

### Run local server:

- Once the project is cloned, in the Node terminal of root folder, run the command:

`npm run start`

### Signup for API keys

The sign-up pages are as below:

- **[GeoNames](http://www.geonames.org/login)**
- **[Weatherbit](https://www.weatherbit.io/account/create)**
- **[Pixabay](https://pixabay.com/accounts/login/?source=main_nav&next=/api/docs/)**
- **[AirLabs](http://airlabs.co/#/free_access)**
- **[aviationstack](https://aviationstack.com/signup)**

### Create Environment file

- Create a new `.env` file in the root of of project
- Fill the `.env` file with your API key like this:

1. `USER_NAME_GEO={your user name} `
2. `WEATHERBIT_KEY={your key} `
3. `PIXABAY_KEY={your key} `
4. `AIRLAB_KEY={your key} `
5. `AVIATION_KEY={your key} `

### Run scripts

All available Scripts of this project are declared in package.json, includes :

- `npm run build-dev` : to run the app in the development mode, automatically opening http://localhost:8000 in the browser.
- `npm run build` : build the app for production to the `dist` folder.
