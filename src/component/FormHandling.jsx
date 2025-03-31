import React, { useState } from "react";

function FormHandling() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(), // Trim input values
    }));

    // console.log(`Updated ${name}:`, value); // Debugging log
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if any field is empty
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.age) {
      alert("Please fill in all fields before submitting.");
      return;
    }

     console.log("Final Form Data Submitted:", formData);

    alert(
      `Form Submitted Successfully! 🎉\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Age: ${formData.age}`
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">User Registration Form</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary btn-block w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormHandling;










