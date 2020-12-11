console.log(`This file was created by Vi.`);

import { postDataToServer } from "./api";
import { displayTripInfo } from "./updateUI";
import { saveTrip, reset } from "./app-function";
import { displaySavedTrips } from "./displaySavedTrips";
import { displaySavedTripsv2 } from "./v2-displaySavedTrips";
import { generateDOM } from "./generateDOM";
import { trialDisplayTripInfo } from "./trial-updateUI";

function setUpEvent() {
  document.addEventListener("DOMContentLoaded", function () {
    /* displaySavedTrips(); */
    displaySavedTripsv2();
    // set up for search button
    document.getElementById("add-btn").addEventListener("click", () => {
      let depCity = document.getElementById("dep-city-name").value.trim();
      let arrCity = document.getElementById("arr-city-name").value.trim();
      let depDate = document.getElementById("departure-date").value;
      console.log(`Trip is from ${depCity} to ${arrCity}, date ${depDate} `);

      //active the entry sections to show & post data
      /* document.querySelector(".hero-box").classList.add("active"); */

      //start to fetch data from server, then display it
      postDataToServer(depCity, arrCity)
        .then((data) => {
          const appBody = document.querySelector(".app-body");
          const heroBox = generateDOM(data);
          appBody.append(heroBox);

          /*  displayTripInfo(data); */

          //reset value in search boxes
          document.querySelector("#departure-date").value = "";
          document.querySelector("#arrival-date").value = "";
          document.querySelector("#dep-city-name").value = "";
          document.querySelector("#arr-city-name").value = "";

          // set up save trip button
          /* const saveBtn = document.querySelector("#save-btn");
          saveBtn.addEventListener("click", () => {
            saveTrip(data);
            document.querySelector(".hero-box").classList.remove("active");
          }); */

          // set up function to remove trip
          /*  const removeBtn = document.querySelector("#delete-btn");
          removeBtn.addEventListener("click", () => {
            reset();
          }); */
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    });
  });
}

export { setUpEvent };
