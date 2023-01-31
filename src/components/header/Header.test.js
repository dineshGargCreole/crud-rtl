import { render, screen } from "../../test.utils";
import Header from "./Header";

describe("header component", () => {
  it("should render all items successfully", () => {
    render(<Header />);
    // const navBrand = screen.getByRole("generic");
    // expect(navBrand).toBeInTheDocument();
    const navItems = screen.getByRole("button", { hidden: true });
    expect(navItems).toBeInTheDocument();
  });
});
