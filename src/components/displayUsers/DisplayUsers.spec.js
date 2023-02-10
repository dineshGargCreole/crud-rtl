import { render, screen } from "@testing-library/react";
import DisplayUsers from "./DisplayUsers";

describe("display users component", () => {
  const users = [
    { id: 1, name: "foo", username: "foo_username", email: "foo@gmail.com" },
    { id: 2, name: "zoo", username: "zoo_username", email: "zoo@gmail.com" },
  ];
  it("shoud componet render crrectly", () => {
    render(<DisplayUsers users={users} />);
    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(3);
  });
});
