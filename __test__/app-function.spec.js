import { takeDate } from "../src/client/js/app-function.js";

describe("test takeDate", () => {
  test("return formated date as MMM DD, YYYY", () => {
    // input
    let input = "2020-12-24";
    //run function
    const result = takeDate(input);
    //check output
    expect(result).toBe("Dec 24, 2020");
  });
});
