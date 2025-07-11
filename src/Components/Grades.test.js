import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Grades from "./Grades";

describe("Grades component", () => {
  test("renders school name and grades title", () => {
    render(<Grades />);
    expect(screen.getByText("Banana School")).toBeInTheDocument();
    expect(screen.getByText("Grades")).toBeInTheDocument();
  });

  test("renders score and total input fields with default values", () => {
    render(<Grades />);
    const scoreInput = screen.getByLabelText(/score/i);
    const totalInput = screen.getByLabelText(/total/i);
    expect(scoreInput).toBeInTheDocument();
    expect(totalInput).toBeInTheDocument();
    expect(scoreInput.value).toBe("0");
    expect(totalInput.value).toBe("100");
  });

  test("calculates and displays the correct grade", () => {
    render(<Grades />);
    const scoreInput = screen.getByLabelText(/score/i);
    const totalInput = screen.getByLabelText(/total/i);

    fireEvent.change(scoreInput, { target: { value: "50" } });
    fireEvent.change(totalInput, { target: { value: "100" } });

    expect(screen.getByText(/Final Grade:/)).toHaveTextContent(
      "Final Grade: 75.00"
    );
  });

  test("handles division by zero and displays N/A", () => {
    render(<Grades />);
    const totalInput = screen.getByLabelText(/total/i);

    fireEvent.change(totalInput, { target: { value: "0" } });

    expect(screen.getByText(/Final Grade:/)).toHaveTextContent(
      "Final Grade: N/A"
    );
  });

  test("shows and hides the explanation modal", () => {
    render(<Grades />);
    const explainBtn = screen.getByText(/Explain Computation/i);

    // Modal should not be visible initially
    expect(
      screen.queryByText(/Grade Computation Explanation/i)
    ).not.toBeInTheDocument();

    // Open modal
    fireEvent.click(explainBtn);
    expect(
      screen.getByText(/Grade Computation Explanation/i)
    ).toBeInTheDocument();

    // Close modal by clicking close button
    const closeBtn = screen.getByText(/Close/i);
    fireEvent.click(closeBtn);
    expect(
      screen.queryByText(/Grade Computation Explanation/i)
    ).not.toBeInTheDocument();
  });

  test("modal closes when clicking on backdrop", () => {
    render(<Grades />);
    const explainBtn = screen.getByText(/Explain Computation/i);

    fireEvent.click(explainBtn);
    expect(
      screen.getByText(/Grade Computation Explanation/i)
    ).toBeInTheDocument();

    // Click on backdrop
    const backdrop = screen
      .getByText(/Grade Computation Explanation/i)
      .closest(".modal-content").parentElement;
    fireEvent.click(backdrop);
    expect(
      screen.queryByText(/Grade Computation Explanation/i)
    ).not.toBeInTheDocument();
  });
});
