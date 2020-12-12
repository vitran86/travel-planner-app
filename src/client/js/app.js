console.log(`This file was created by Vi.`);

import { postDataToServer } from "./api";
import { displaySavedTrips } from "./displaySavedTrips";
import { generateDOM } from "./generateDOM";

function setUpEvent() {
  document.addEventListener("DOMContentLoaded", function () {
    displaySavedTrips();
    // set up for search button
    document.getElementById("add-btn").addEventListener("click", () => {
      let depCity = document.getElementById("dep-city-name").value.trim();
      let arrCity = document.getElementById("arr-city-name").value.trim();
      let depDate = document.getElementById("departure-date").value;
      console.log(`Trip is from ${depCity} to ${arrCity}, date ${depDate} `);

      //start to fetch data from server, then display it
      postDataToServer(depCity, arrCity)
        .then((data) => {
          const appBody = document.querySelector(".app-body");
          const heroBox = generateDOM(data);
          appBody.append(heroBox);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    });
  });
}

export { setUpEvent };
