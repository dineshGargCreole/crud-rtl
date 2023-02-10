// import { screen } from "@testing-library/react";
import { render, screen } from "./test.utils";
import App from "./App";

describe("app component", () => {
  it("full app rendering/navigating", async () => {
    const { user } = render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("welcome to the Home Page!!")).toBeInTheDocument();

    await user.click(screen.getByText(/new/i));
    expect(
      screen.getByRole("heading", { name: "Create a New User" })
    ).toBeInTheDocument();
  });
});
