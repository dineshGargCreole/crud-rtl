import { render } from "../../test.utils";
import { screen } from "@testing-library/react";
import Home from "./Home";

describe("home", () => {
  it("should render coomponent successfully", () => {
    render(<Home />);
    const textElement = screen.getByText("welcome to the Home Page!!");
    expect(textElement).toBeInTheDocument();
  });
});
