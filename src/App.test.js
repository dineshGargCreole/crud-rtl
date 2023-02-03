import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app component", () => {
  it("should", () => {
    const { debug } = render(<App />);
    // console.log("apppp");
    // console.log(debug());
  });
});
