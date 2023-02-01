import { render, screen } from "../../test.utils";
import Header from "./Header";
import user from "@testing-library/user-event";

describe("header component", () => {
  it("should render all navbar items successfully", () => {
    render(<Header />);
    const items = ["Navbar", "Home", "New"];
    const navItems = screen.getAllByRole("link");
    expect(navItems.length).toEqual(3);
    navItems.forEach((item, index) => {
      expect(item).toHaveTextContent(items[index]);
    });
  });
});
