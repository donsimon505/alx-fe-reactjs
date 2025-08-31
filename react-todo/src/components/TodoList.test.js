import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Submit Assignment")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  // Delete todo test
  test("deletes a todo", async () => {
    render(<TodoList />);

    // Click the corresponding Delete button (first one)
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    // Wait for the todo to be removed
    await waitFor(() => {
      expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
  });
});
