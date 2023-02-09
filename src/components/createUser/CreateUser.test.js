import CreateUser from "./CreateUser";
import { render, screen } from "@testing-library/react";

describe("create user component", () => {
  it("should render component successfully", () => {
    render(<CreateUser />);
    const heading = screen.getByRole("heading", { name: "Create a New User" });
    expect(heading).toBeInTheDocument();
  });
});
