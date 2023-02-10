import { render, screen } from "../../test.utils";
import { waitFor } from "@testing-library/react";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

describe("user form component", () => {
  it("should component elements render correctly", () => {
    render(<UserForm />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements).toHaveLength(3);

    const nameInput = screen.getByPlaceholderText("Enter name");
    expect(nameInput).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText("Enter username");
    expect(usernameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Enter email");
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  it("should form submit succefully", async () => {
    user.setup();
    const handleSubmit = jest.fn();
    render(<UserForm onSubmit={handleSubmit} />);

    await user.type(screen.getByPlaceholderText("Enter name"), "John");
    await user.type(screen.getByPlaceholderText("Enter username"), "Dee");
    await user.type(
      screen.getByPlaceholderText("Enter email"),
      "john.dee@someemail.com"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "john.dee@someemail.com",
        name: "John",
        username: "Dee",
      })
    );
  });
});
