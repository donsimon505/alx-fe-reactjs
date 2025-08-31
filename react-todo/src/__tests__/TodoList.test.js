// src/__tests__/TodoList.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Submit Assignment")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    await userEvent.type(input, "New Task");
    await userEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo completion", async () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially not completed (no line-through)
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    await userEvent.click(todo);

    // After click, should be completed
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Click again toggles back
    await userEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling; // the button next to the todo

    await userEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
