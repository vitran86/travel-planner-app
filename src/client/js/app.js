console.log(`This file was created by Vi.`);

import {
  setUpDateInput,
  sendErrorMsg,
  startClick,
  getBackground,
} from "./innitialSetup";
import { postDataToServer } from "./api";
import { displaySavedTrips } from "./displaySavedTrips";
import { generateDOM } from "./generateDOM";
import { reload, reset } from "./app-function";

function setUpEvent() {
  document.addEventListener("DOMContentLoaded", function () {
    getBackground();
    startClick();
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

    // set up for reset button
    const resetBTn = document.getElementById("reset-btn");
    resetBTn.addEventListener("click", (e) => {
      const errMsg = document.querySelector(".error-msg");
      console.log("reset btn clicked");

      if (resetBTn.classList.contains("clicked")) {
        e.target.textContent = "Delete All";
        resetBTn.classList.remove("clicked");
      } else {
        e.target.textContent = " Confirm";
        errMsg.innerHTML =
          "Do you want to delete all saved trip(s)? Click confirm to process";
        resetBTn.classList.add("clicked");
      }
      resetBTn.addEventListener("click", (e) => {
        console.log("CONFIRMED");
        e.target.textContent = "Deleting...";
        setTimeout(function () {
          resetBTn.setAttribute("disabled", "true");
        }, 2000);
        errMsg.innerHTML = "";
        reset();
        reload();
      });
    });
  });
}

export { setUpEvent };
