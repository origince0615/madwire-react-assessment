import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserForm from "./UserForm";

test("UserForm should show the correct form data", () => {
  const data = {
    name: "Bob",
    username: "Bob the builder",
    email: "bob@example.com"
  };
  const onSubmit = jest.fn();
  const { container, getByLabelText } = render(
    <UserForm data={data} onSubmit={onSubmit} />
  );
  const nameInput = getByLabelText("Name");
  const usernameInput = getByLabelText("Username");
  const emailInput = getByLabelText("Email");
  const submitButton = container.querySelector("button[type='submit']");

  expect(nameInput.value).toBe("Bob");
  expect(usernameInput.value).toBe("Bob the builder");
  expect(emailInput.value).toBe("bob@example.com");

  fireEvent.change(nameInput, { target: { value: "John" } });
  fireEvent.change(usernameInput, { target: { value: "John the builder" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    name: "John",
    username: "John the builder",
    email: "john@example.com"
  });
});