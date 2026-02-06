import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders reserve button", () => {
  render(<BookingForm />);
  const button = screen.getByText("Reserve");
  expect(button).toBeInTheDocument();
});
