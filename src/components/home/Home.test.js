import { render } from "../../test.utils";
import { screen } from "@testing-library/react";
import Home from "./Home";

describe("home", () => {
  it("should render component successfully", async () => {
    render(<Home />);
    const textElement = screen.getByText("welcome to the Home Page!!");
    expect(textElement).toBeInTheDocument();

    // const rows = await screen.findAllByRole("row");
    // expect(rows).toHaveLength(6);
  });
});
