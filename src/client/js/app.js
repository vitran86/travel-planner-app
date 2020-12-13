console.log(`This file was created by Vi.`);

import { setUpDateInput, sendErrorMsg } from "./innitialSetup";
import { postDataToServer } from "./api";
import { displaySavedTrips } from "./displaySavedTrips";
import { generateDOM } from "./generateDOM";
import { reload } from "./app-function";

function setUpEvent() {
  document.addEventListener("DOMContentLoaded", function () {
    setUpDateInput();
    displaySavedTrips();

    // set up for add trip button
    document.getElementById("add-btn").addEventListener("click", () => {
      let depCity = document.getElementById("dep-city-name").value.trim();
      let arrCity = document.getElementById("arr-city-name").value.trim();
      let depDate = document.getElementById("departure-date").value;
      console.log(`Trip is from ${depCity} to ${arrCity}, date ${depDate} `);

      const checkError = sendErrorMsg();
      if (checkError === "Error detected") {
        /*  const appBody = document.querySelector(".app-body");
        appBody.style.display = "none"; */
        /* document.getElementById("dep-city-name").innerHTML = "";
        document.getElementById("arr-city-name").innerHTML = ""; */
        depCity = "";
        arrCity = "";
      } else {
        const errMsg = document.querySelector(".error-msg");
        errMsg.style.display = "none";
      }

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
