import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" required onChange={handleChange} />

      <label>Date</label>
      <input type="date" name="date" required onChange={handleChange} />

      <label>Time</label>
      <input type="time" name="time" required onChange={handleChange} />

      <label>Guests</label>
      <input
        type="number"
        name="guests"
        min="1"
        max="10"
        required
        onChange={handleChange}
      />

      <label>Occasion</label>
      <select name="occasion" onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Reserve</button>
    </form>
  );
}
