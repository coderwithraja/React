import React, { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", inputs);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <center><h1>New Ambulance Case Form</h1></center>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle No:
          <select name="VehicleNo" onChange={handleChange}>
            <option value="">Select</option>
            <option value="KA-01-HH-1234">KA-01-HH-1234</option>
            <option value="KA-01-HH-9999">KA-01-HH-9999</option>
            <option value="KA-01-BB-0001">KA-01-BB-0001</option>
          </select>
        </label>
        <br />

        <label>
          Date:
          <input type="date" name="date" onChange={handleChange} />
        </label>
        <br />

        <label>
          Pickup Location:
          <input type="text" name="pickup" onChange={handleChange} />
        </label>
        <br />

        <label>
          Drop Location:
          <input type="text" name="drop" onChange={handleChange} />
        </label>
        <br />

        <label>
          Patient Name:
          <input type="text" name="patientName" onChange={handleChange} />
        </label>
        <br />

        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} />
        </label>
        <br />

        <label>
          Gender:
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />

        <label>
          Case Type:
          <select name="caseType" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Emergency">Emergency</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Transfer">Transfer</option>
          </select>
        </label>
        <br />

        <label>
          Attendant Name:
          <input type="text" name="attendant" onChange={handleChange} />
        </label>
        <br />

        <label>
          Contact Number:
          <input type="tel" name="contact" onChange={handleChange} />
        </label>
        <br />

        <button type="submit">Submit Case</button>
      </form>
    </div>
  );
};

export default MyForm;
