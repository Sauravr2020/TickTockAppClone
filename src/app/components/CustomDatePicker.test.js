import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomDatePicker from "./CustomDatePicker"; 

describe("CustomDatePicker Component", () => {
  test("renders date picker", () => {
    render(<CustomDatePicker />);
    expect(screen.getByRole("textbox")).toBeInTheDocument(); 
  });

  test("generates a date", () => {
    render(<CustomDatePicker />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "2024-09-27" },
    });
    expect(screen.getByText("2024-09-27")).toBeInTheDocument(); 
  });

  test("removes a date", () => {
    render(<CustomDatePicker />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "2024-09-27" },
    });
    expect(screen.getByText("2024-09-27")).toBeInTheDocument(); 

    fireEvent.click(screen.getByText(/Remove/i)); 
    expect(screen.queryByText("2024-09-27")).not.toBeInTheDocument(); 
  });
});
