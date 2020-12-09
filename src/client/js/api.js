let serverURL = "";

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  serverURL = "http://localhost:8000";
}

// set up function to call API by POST method to server
const postDataToServer = async (depCity, arrCity, flightDate) => {
  const result = await fetch(`${serverURL}/addTrip`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "text/plain",
    },
    body: JSON.stringify({
      depCity: depCity,
      arrCity: arrCity,
      flightDate: flightDate,
    }),
  });
  if (result.status === 200) {
    const data = await result.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`Unable to fetch data`);
  }
};

export { postDataToServer };
