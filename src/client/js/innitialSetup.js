import moment from "moment";
import mySpring from "../images/pic/spring.jpg";
import mySummer from "../images/pic/summer.jpg";
import myAutumn from "../images/pic/fall.jpg";
import myWinter from "../images/pic/winter.jpg";

// for user can't choose the date in the past
const setUpDateInput = () => {
  const depDate = document.getElementById("departure-date");
  const arrDate = document.getElementById("arrival-date");
  const today = new Date().toISOString().slice(0, 10);
  depDate.setAttribute("min", `${today}`);
  arrDate.setAttribute("min", `${today}`);
};

// send error message for input
const sendErrorMsg = () => {
  const departDate = document.querySelector("#departure-date").value;
  const arriveDate = document.querySelector("#arrival-date").value;
  const depCity = document.getElementById("dep-city-name").value.trim();
  const arrCity = document.getElementById("arr-city-name").value.trim();
  const errMsg = document.querySelector(".error-msg");
  const msg = "Error detected";

  // if user enter departure/arrival date is in the past
  const today = new Date().toISOString().slice(0, 10);

  if (departDate < today || arriveDate < today) {
    errMsg.innerHTML = `!!!ERROR!!!Input date can not before current date!`;
    return msg;
  }

  // check if arrival date is before departure date
  const startDay = moment(new Date(departDate));
  const endDay = moment(new Date(arriveDate));
  const daysDiff = endDay.diff(startDay, "day");
  console.log(daysDiff);

  if (daysDiff < 0) {
    errMsg.innerHTML = `!!!ERROR!!!Arrival date can not before departure date!`;
    return msg;
  }

  // check if departure or arrival date is blank
  if (!departDate || !arriveDate) {
    errMsg.innerHTML = `ERROR!Depature date and arrival date can't be blank!`;
    return msg;
  }

  // check if departure city or arrival city is blank
  if (!depCity) {
    errMsg.innerHTML = `Please enter departure city.`;
    return msg;
  }
  if (!arrCity) {
    errMsg.innerHTML = `Please provide arrival city for process! `;
    return msg;
  }
};

function startClick() {
  const startBtn = document.querySelector(".start-btn");
  const appBody = document.querySelector(".app-body");
  startBtn.addEventListener("click", () => {
    const backgroundApp = document.querySelector(".background-app");
    if (backgroundApp.classList.contains("hide")) {
      backgroundApp.classList.remove("hide");
      appBody.classList.remove("show");
    } else {
      backgroundApp.classList.add("hide");
      appBody.classList.add("show");
    }
  });
}

function getBackground() {
  const month = new Date().getMonth() + 1;
  /* console.log(month); */
  const backgroundApp = document.querySelector(".background-app");

  if (month >= 10) {
    backgroundApp.style.background = `url(${myWinter})`;
    backgroundApp.style.BackgoundSize = "contain";
    backgroundApp.style.backgroundRepeat = "no-repeated";
    backgroundApp.style.backgroundPosition = "center";
  } else if (month >= 7) {
    backgroundApp.style.background = `url(${myAutumn})`;
    backgroundApp.style.backgroundSize = "contain";
    backgroundApp.style.backgroundRepeat = "no-repeated";
    backgroundApp.style.backgroundPosition = "center";
  } else if (month >= 4) {
    backgroundApp.style.background = `url(${mySummer})`;
    backgroundApp.style.backgroundSize = "cover";
    backgroundApp.style.backgroundRepeat = "no-repeated";
    backgroundApp.style.backgroundPosition = "center";
  } else {
    backgroundApp.style.background = `url(${mySpring})`;
    backgroundApp.style.backgroundSize = "cover";
    backgroundApp.style.backgroundRepeat = "no-repeated";
    backgroundApp.style.backgroundPosition = "center";
  }
}
export { setUpDateInput, sendErrorMsg, startClick, getBackground };
