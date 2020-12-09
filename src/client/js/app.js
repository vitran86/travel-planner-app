console.log(`This file was created by Vi.`);

import { postDataToServer } from "./api";
import { displayTripInfo } from "./updateUI";
import { saveTrip, removeTrip } from "./app-function";

function setUpEvent() {
  document.addEventListener("DOMContentLoaded", function () {
    // set up for search button
    document.getElementById("add-btn").addEventListener("click", () => {
      let depCity = document.getElementById("dep-city-name").value.trim();
      let arrCity = document.getElementById("arr-city-name").value.trim();
      let depDate = document.getElementById("departure-date").value;
      console.log(`Trip is from ${depCity} to ${arrCity}, date ${depDate} `);

      //active the entry sections to show & post data
      document.querySelector(".hero-box").classList.add("active");

      //start to fetch data from server, then display it
      postDataToServer(depCity, arrCity)
        .then((data) => {
          displayTripInfo(data);

          //reset value in search boxes
          document.querySelector("#departure-date").value = "";
          document.querySelector("#arrival-date").value = "";
          document.querySelector("#dep-city-name").value = "";
          document.querySelector("#arr-city-name").value = "";

          // set up save trip button
          const saveBtn = document.querySelector("#save-btn");
          saveBtn.addEventListener("click", () => {
            saveTrip(data);
          });
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        });
    });

    // set up function to remove trip
    const removeBtn = document.querySelector("#delete-btn");
    removeBtn.addEventListener("click", () => {
      removeTrip(trip.id);
    });
  });
}

export { setUpEvent };
