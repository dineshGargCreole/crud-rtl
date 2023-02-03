import { render, screen } from "../../test.utils";
// import { render, screen } from "@testing-library/react";
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

  // it("route test", async () => {
  //   user.setup();
  //   render(<Header />);
  //   // const { debug } = render(<Header />);
  //   // console.log("..........", debug());
  //   const newItem = screen.getByText("New");
  //   await user.click(newItem);
  //   expect(newItem).toBeCalledTimes(1);
  // });
});
