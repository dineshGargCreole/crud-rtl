import { render, screen } from "../../test.utils";
import UserForm from "./UserForm";
import user from "@testing-library/user-event";

describe("user form component", () => {
  it("should component elements render correctly", () => {
    render(<UserForm />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements).toHaveLength(3);

    const nameInput = screen.getByPlaceholderText("Enter full name");
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
    const onSubmit = jest.fn();
    render(<UserForm onSubmit={onSubmit} />);

    const nameInput = screen.getByPlaceholderText("Enter full name");
    await user.type(nameInput, "foo");

    const usernameInput = screen.getByPlaceholderText("Enter username");
    await user.type(usernameInput, "foo-username");

    const emailInput = screen.getByPlaceholderText("Enter email");
    await user.type(emailInput, "foo@yopmail.com");

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await user.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
