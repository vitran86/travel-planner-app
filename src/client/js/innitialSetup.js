import moment from "moment";

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

export { setUpDateInput, sendErrorMsg };
