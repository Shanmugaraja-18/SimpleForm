import React, { useState } from 'react';
import './style.css'; 
import { saveAs } from 'file-saver'; 

function App() {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };

  const handleDownload = () => {
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'details.json');
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          College Name:
          <input
            type="text"
            name="collegeName"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div className="details">
          <h2>Entered Details</h2>
          <p>
            <strong>Full Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Date of Birth:</strong> {formData.dob}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Emal:</strong> {formData.email}</p>
          <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
          <p><strong>Department:</strong> {formData.department}</p>
          <p><strong>College Name:</strong> {formData.collegeName}</p>
          <button onClick={handleDownload}>Download as PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;
